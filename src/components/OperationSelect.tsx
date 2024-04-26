import { Box, Button, Container, Select, SimpleGrid } from "@chakra-ui/react";
import {
  MessageSquareMore,
  RefreshCw,
  FlaskConical,
  Languages,
} from "lucide-react";

export const OperationSelect = () => {
  return (
    <Container maxW={"7xl"} my={16}>
      <Box>
        <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
          <Button
            leftIcon={<MessageSquareMore />}
            size={{ base: "sm", md: "md" }}
            backgroundColor={"main.operations"}
            color={"text.primary"}
          >
            Explain
          </Button>
          <Button
            leftIcon={<RefreshCw />}
            size={{ base: "sm", md: "md" }}
            backgroundColor={"main.operations"}
            color={"text.primary"}
          >
            Refactor
          </Button>
          <Button
            leftIcon={<FlaskConical />}
            size={{ base: "sm", md: "md" }}
            backgroundColor={"main.operations"}
            color={"text.primary"}
          >
            Create Tests
          </Button>
          <Button
            leftIcon={<Languages />}
            size={{ base: "sm", md: "md" }}
            backgroundColor={"main.operations"}
            color={"text.primary"}
          >
            Translate To
          </Button>
        </SimpleGrid>
        <Select
          placeholder="Go"
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
      </Box>
    </Container>
  );
};
