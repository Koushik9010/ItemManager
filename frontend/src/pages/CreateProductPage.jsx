import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
  FormControl,
  FormLabel,
  FormHelperText,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const toast = useToast();
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      bg={useColorModeValue("gray.50", "gray.900")}
      py={12}
      px={4}
    >
      <Container maxW={"container.md"} flex="1">
        <VStack spacing={12}>
          {/* Page Heading */}
          <Heading
            as="h1"
            size="2xl"
            textAlign="center"
            bgGradient="linear(to-r, teal.400, blue.500, purple.600)"
            bgClip="text"
          >
            Create New Product
          </Heading>

          {/* Form Box */}
          <Box
            w="full"
            bg={useColorModeValue("white", "gray.800")}
            p={8}
            rounded="lg"
            shadow="xl"
            borderWidth="1px"
          >
            <VStack spacing={6}>
              {/* Product Name */}
              <FormControl id="name" isRequired>
                <FormLabel fontWeight="bold">Product Name</FormLabel>
                <Input
                  placeholder="Enter product name"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                />
                <FormHelperText>Give your product a unique name.</FormHelperText>
              </FormControl>

              {/* Product Price */}
              <FormControl id="price" isRequired>
                <FormLabel fontWeight="bold">Price</FormLabel>
                <Input
                  placeholder="Enter product price"
                  type="number"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                />
                <FormHelperText>Enter the price in your local currency.</FormHelperText>
              </FormControl>

              {/* Product Image */}
              <FormControl id="image" isRequired>
                <FormLabel fontWeight="bold">Image URL</FormLabel>
                <Input
                  placeholder="Enter image URL"
                  value={newProduct.image}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, image: e.target.value })
                  }
                />
                <FormHelperText>
                  Provide a valid URL for the product image.
                </FormHelperText>
              </FormControl>

              <Divider />

              {/* Submit Button */}
              <Button
                colorScheme="blue"
                size="lg"
                onClick={handleAddProduct}
                w="full"
                rounded="full"
              >
                Add Product
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default CreatePage;
