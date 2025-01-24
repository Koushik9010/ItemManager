import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4} py={2} borderBottomWidth={1} borderColor={"gray.200"}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
        gap={2}
      >
        {/* Logo Section */}
        <Text
          fontSize={{ base: "24px", sm: "32px" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500, purple.600)"}
          bgClip={"text"}
          letterSpacing={"widest"}
          _hover={{ transform: "scale(1.05)" }}
          transition={"transform 0.2s"}
        >
          <Link to={"/"}>ItemManager 🛒</Link>
        </Text>

        {/* Button Section */}
        <HStack spacing={4} alignItems={"center"}>
          {/* Add Product Button */}
          <Link to={"/createProduct"}>
            <Button
              leftIcon={<PlusSquareIcon fontSize={20} />}
              colorScheme={"blue"}
              size={"sm"}
              variant={"solid"}
              _hover={{
                bg: "blue.600",
              }}
            >
              Add Product
            </Button>
          </Link>

          {/* Dark Mode Toggle */}
          <Button
            onClick={toggleColorMode}
            size={"sm"}
            variant={"ghost"}
            _hover={{ bg: "gray.200" }}
          >
            {colorMode === "light" ? <IoMoon size="20" /> : <LuSun size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
