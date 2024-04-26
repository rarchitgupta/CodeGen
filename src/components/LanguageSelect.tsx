import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Select } from "@chakra-ui/react";

export const LanguageSelect = () => {
  return (
    <Select
      placeholder="JavaScript"
      variant="filled"
      bg="#15181F"
      borderColor={"#15181F"}
      color={"white"}
      maxW={{ base: 40, md: 80 }}
      _focus={{ backgroundColor: "black", color: "white" }}
      fontSize={{ base: "sm", md: "md" }}
    >
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
};
