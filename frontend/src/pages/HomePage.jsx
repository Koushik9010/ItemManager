import { Container, VStack, Text, Box, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard.jsx";

const HomePage = () => {
  const { getAllProducs, products } = useProductStore();

  useEffect(() => {
    getAllProducs();
  }, [getAllProducs]);

  console.log("products", products);

  return (
    <Container maxW={"container.xl"} py={12}>
      <VStack spacing={12}>
        {/* Header */}
        <Text fontSize={"3xl"} fontWeight={"extrabold"} textAlign={"center"}>
          <Box
            as="span"
            bgGradient="linear(to-r, teal.400, blue.500, purple.600)"
            bgClip="text"
          >
            Current Products
          </Box>{" "}
          🚀
        </Text>
  
        {/* Product Grid */}
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={8}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
  
        {/* No Products Message */}
        {products.length === 0 && (
          <Box textAlign={"center"} mt={8}>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="gray.500"
              mb={4}
              bgGradient="linear(to-r, red.400, pink.500)"
              bgClip="text"
            >
              No products found 😢
            </Text>
            <Link to={"/createProduct"}>
              <Text
                as="span"
                color="blue.600"
                fontSize="lg"
                fontWeight="semibold"
                _hover={{
                  textDecoration: "underline",
                  color: "blue.800",
                }}
              >
                Create a product
              </Text>
            </Link>
          </Box>
        )}
      </VStack>
    </Container>
  );
  
};

export default HomePage;
