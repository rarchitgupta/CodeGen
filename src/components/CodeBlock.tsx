"use client";
import { Container, Flex } from "@chakra-ui/react";
import CodeMirror from "@uiw/react-codemirror";
import { andromeda } from "@uiw/codemirror-theme-andromeda";
import { StreamLanguage } from "@codemirror/language";
import { go } from "@codemirror/legacy-modes/mode/go";
import { Text } from "@chakra-ui/react";
import { LanguageSelect } from "./LanguageSelect";

export const CodeBlock = () => {
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
      <CodeMirror
        theme={andromeda}
        extensions={[StreamLanguage.define(go)]}
        lang="javascript"
        minHeight="450px"
      />
    </Container>
  );
};
