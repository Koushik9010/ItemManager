import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const AboutPage = () => {
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box
      minHeight="100vh" // Ensure the box takes the full viewport height
      display="flex"
      flexDirection="column"
      py={150}
    >
      <Box flex="1" py={12} bg={useColorModeValue("gray.50", "gray.900")}>
        <Container maxW={"container.lg"}>
          <VStack spacing={8} textAlign={"center"}>
            {/* Heading */}
            <Heading
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              bgGradient={"linear(to-r, cyan.400, blue.500)"}
              bgClip={"text"}
            >
              About ItemManager 🛒
            </Heading>

            {/* Description */}
            <Text fontSize={"lg"} color={textColor}>
              Welcome to <strong>ItemManager</strong>, your ultimate solution
              for managing products seamlessly and efficiently. Our platform is
              designed to provide users with a smooth and intuitive experience
              when it comes to organizing, updating, and tracking items.
            </Text>

            {/* Mission */}
            <Text fontSize={"lg"} color={textColor}>
              Our mission is to empower businesses and individuals with the
              tools they need to stay organized, save time, and focus on what
              matters most—growing their operations and achieving their goals.
            </Text>

            {/* Additional Info */}
            <Text fontSize={"md"} color={textColor}>
              Whether you're running a small business or managing personal
              inventory, <strong>ItemManager</strong> is here to make it easier.
              Join us on this journey of simplicity and productivity.
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
