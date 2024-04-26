import { theme } from "@/theme";
import {
  Box,
  Flex,
  MenuButton,
  IconButton,
  Icon,
  Menu,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { Menu as MenuIcon, Bug } from "lucide-react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Box>
      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex direction={"row"} alignItems={"center"} gap={4}>
          <Bug size={30} color={"white"} />
          <Text fontSize={{ base: "md", md: "x-large" }} color="text.primary">
            CodeAssist
          </Text>
        </Flex>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<MenuIcon />}
            variant="solid"
            colorScheme="black"
            size="lg"
          />
          <MenuList></MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};
