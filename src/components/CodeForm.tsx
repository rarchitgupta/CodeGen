"use client";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import CodeMirror, { ViewUpdate } from "@uiw/react-codemirror";
import { useChat } from "ai/react";
import { useForm, Controller } from "react-hook-form";
import { andromeda } from "@uiw/codemirror-theme-andromeda";
import { StreamLanguage } from "@codemirror/language";
import { go } from "@codemirror/legacy-modes/mode/go";
import { LanguageSelect } from "./LanguageSelect";
import { OperationSelect } from "./OperationSelect";

export const CodeForm = () => {
  const { control } = useForm();
  const {
    input,
    setInput,
    handleSubmit,
    handleInputChange,
    messages,
    setMessages,
  } = useChat();

  const createChangeEvent: any = (value: string) => ({
    target: { value },
  });
  return (
    <Container maxW={"7xl"} my={16}>
      <Flex
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        my={4}
      >
        <Text color="text.primary" fontSize={{ base: "sm", md: "md" }}>
          Input Code
        </Text>
        <LanguageSelect />
      </Flex>
      <form
        onSubmit={(e) => {
          setMessages([]);
          handleSubmit(e);
        }}
      >
        <Controller
          name="code"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <CodeMirror
              {...field}
              theme={andromeda}
              extensions={[StreamLanguage.define(go)]}
              value={input}
              lang="javascript"
              minHeight="450px"
              onChange={(value) => {
                field.onChange(value);
                const event = createChangeEvent(value);
                handleInputChange(event);
              }}
            />
          )}
        />
        <OperationSelect />
        <Button type="submit">Submit</Button>
      </form>
      <Box my={4}>
        {messages.map((m) => {
          if (m.role !== "user") {
            return (
              <Text key={m.id} color="text.primary">
                {m.content}
              </Text>
            );
          }
        })}
      </Box>
    </Container>
  );
};
