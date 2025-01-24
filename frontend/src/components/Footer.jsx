import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  const bg = useColorModeValue("gray.100", "gray.800");
  const color = useColorModeValue("gray.600", "gray.400");

  return (
    <Box bg={bg} py={6} mt={12} w="full">
      <Container maxW={"1140px"}>
        <Flex
          direction={{
            base: "column",
            sm: "row",
          }}
          justify={"space-between"}
          align={"center"}
          gap={4}
        >
          {/* Left Section: Copyright Text */}
          <Text fontSize={"sm"} color={color} textAlign={"center"}>
            © {new Date().getFullYear()} ItemManager. All rights reserved.
          </Text>

          {/* Right Section: Navigation Links */}
          <HStack spacing={6}>
            <Link
              href="/about"
              fontSize={"sm"}
              color={color}
              _hover={{ color: "blue.500", textDecoration: "underline" }}
            >
              About
            </Link>
            <Link
              href="/contact"
              fontSize={"sm"}
              color={color}
              _hover={{ color: "blue.500", textDecoration: "underline" }}
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              fontSize={"sm"}
              color={color}
              _hover={{ color: "blue.500", textDecoration: "underline" }}
            >
              Privacy Policy
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
