import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    List,
    ListItem,
    ListIcon,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { CheckIcon } from "@chakra-ui/icons";
  
  const PrivacyPage = () => {
    const bgColor = useColorModeValue("gray.50", "gray.900");
    const textColor = useColorModeValue("gray.600", "gray.400");
  
    return (
      <Box py={12} bg={bgColor} minHeight="100vh">
        <Container maxW={"container.lg"}>
          <VStack spacing={8} textAlign="center">
            {/* Heading Section */}
            <Heading
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              bgGradient={"linear(to-r, cyan.400, blue.500)"}
              bgClip={"text"}
            >
              Privacy Policy 📜
            </Heading>
  
            <Text fontSize={"lg"} color={textColor} maxW={"3xl"}>
              At ItemManager, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, and protect your information when you
              use our website and services.
            </Text>
          </VStack>
  
          {/* Privacy Policy Sections */}
          <Box mt={10}>
            <VStack spacing={8}>
              {/* Introduction Section */}
              <Box>
                <Heading size="lg" mb={4}>
                  Introduction
                </Heading>
                <Text color={textColor}>
                  This Privacy Policy outlines the information we collect, how we
                  use it, and how we ensure your privacy when you use our services.
                  By using our services, you agree to the terms of this policy.
                </Text>
              </Box>
  
              {/* Data Collection Section */}
              <Box>
                <Heading size="lg" mb={4}>
                  Information We Collect
                </Heading>
                <Text color={textColor}>
                  We may collect the following types of information:
                </Text>
                <List spacing={3} mt={4}>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="cyan.400" />
                    Personal Information: Name, email, etc.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="cyan.400" />
                    Usage Data: Information about how you interact with our website.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="cyan.400" />
                    Cookies and Tracking Technologies: To improve your experience.
                  </ListItem>
                </List>
              </Box>
  
              {/* Data Usage Section */}
              <Box>
                <Heading size="lg" mb={4}>
                  How We Use Your Information
                </Heading>
                <Text color={textColor}>
                  The information we collect is used for the following purposes:
                </Text>
                <List spacing={3} mt={4}>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="cyan.400" />
                    To provide and improve our services.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="cyan.400" />
                    To communicate with you regarding your account or services.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="cyan.400" />
                    To send promotional emails (with your consent).
                  </ListItem>
                </List>
              </Box>
  
              {/* Data Protection Section */}
              <Box>
                <Heading size="lg" mb={4}>
                  Data Protection and Security
                </Heading>
                <Text color={textColor}>
                  We implement security measures to protect your personal data
                  from unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the internet is completely
                  secure, and we cannot guarantee the absolute security of your data.
                </Text>
              </Box>
  
              {/* Your Rights Section */}
              <Box>
                <Heading size="lg" mb={4}>
                  Your Rights
                </Heading>
                <Text color={textColor}>
                  You have the right to:
                </Text>
                <List spacing={3} mt={4}>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="cyan.400" />
                    Request access to your personal data.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="cyan.400" />
                    Correct or update your personal information.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="cyan.400" />
                    Request deletion of your personal data.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="cyan.400" />
                    Opt-out of promotional communications.
                  </ListItem>
                </List>
              </Box>
  
              {/* Changes to Privacy Policy Section */}
              <Box>
                <Heading size="lg" mb={4}>
                  Changes to This Policy
                </Heading>
                <Text color={textColor}>
                  We may update this Privacy Policy from time to time. When we
                  update the policy, we will post the revised version on this page
                  with an updated revision date.
                </Text>
              </Box>
            </VStack>
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default PrivacyPage;
  