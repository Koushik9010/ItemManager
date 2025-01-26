import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Flex,
  HStack,
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
            © {new Date().getFullYear()}{" "}
            <Link to="/" style={{ textDecoration: "underline" }}>
              ItemManager
            </Link>
            . All rights reserved.
          </Text>

          {/* Right Section: Navigation Links */}
          <HStack spacing={6}>
            <Link
              to="/about"
              style={{ color: color, textDecoration: "none" }}
              onMouseEnter={(e) =>
                (e.target.style.textDecoration = "underline")
              }
              onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
            >
              About
            </Link>
            <Link
              to="/contact"
              style={{ color: color, textDecoration: "none" }}
              onMouseEnter={(e) =>
                (e.target.style.textDecoration = "underline")
              }
              onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              style={{ color: color, textDecoration: "none" }}
              onMouseEnter={(e) =>
                (e.target.style.textDecoration = "underline")
              }
              onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
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
