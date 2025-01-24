import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    Textarea,
    VStack,
    useColorModeValue,
  } from "@chakra-ui/react";
  
  const ContactPage = () => {
    const bgColor = useColorModeValue("gray.50", "gray.900");
    const textColor = useColorModeValue("gray.600", "gray.400");
  
    return (
      <Box bg={bgColor} py={12} minHeight="100vh">
        <Container maxW={"container.lg"}>
          <VStack spacing={8} textAlign="center">
            {/* Heading Section */}
            <Heading
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              bgGradient={"linear(to-r, cyan.400, blue.500)"}
              bgClip={"text"}
            >
              Contact Us 📞
            </Heading>
  
            <Text fontSize={"lg"} color={textColor} maxW={"3xl"}>
              Have questions or feedback? We'd love to hear from you. Fill out the
              form below, and we'll get back to you as soon as possible.
            </Text>
          </VStack>
  
          {/* Contact Form */}
          <Box mt={10}>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={8}
              justify="space-between"
            >
              {/* Contact Details */}
              <VStack align="flex-start" spacing={4} w={{ base: "full", md: "40%" }}>
                <Box>
                  <Text fontWeight="bold" color={textColor}>
                    Email:
                  </Text>
                  <Text color="cyan.400">contact@itemmanager.com</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" color={textColor}>
                    Phone:
                  </Text>
                  <Text color="cyan.400">+1 234 567 890</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" color={textColor}>
                    Address:
                  </Text>
                  <Text color="cyan.400">123 Chattogram, Bangladesh</Text>
                </Box>
              </VStack>
  
              {/* Form */}
              <Box
                as="form"
                p={8}
                bg={useColorModeValue("white", "gray.800")}
                shadow="lg"
                rounded="lg"
                w={{ base: "full", md: "60%" }}
              >
                <VStack spacing={6}>
                  <FormControl id="name" isRequired>
                    <FormLabel>Your Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      focusBorderColor="cyan.400"
                    />
                  </FormControl>
  
                  <FormControl id="email" isRequired>
                    <FormLabel>Your Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      focusBorderColor="cyan.400"
                    />
                  </FormControl>
  
                  <FormControl id="message" isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      placeholder="Write your message here"
                      rows={5}
                      focusBorderColor="cyan.400"
                    />
                  </FormControl>
  
                  <Button colorScheme="blue" size="lg" w="full">
                    Submit
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default ContactPage;
  