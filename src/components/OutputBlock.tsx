import { Container, Flex } from "@chakra-ui/react";
import { useChat } from "ai/react";

export const OutputBlock = () => {
  const { handleSubmit } = useChat();
  return (
    <div>
      <div></div>
    </div>
  );
};
