"use client";

import {
  Box,
  Grid,
  Card,
  Heading,  
  Image,
  Text,
  Badge,
  Button,
  Flex
} from "@chakra-ui/react";

type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    thumbnail: string;
};

export default function Products({products}: {products: Product[]}) {

  return (
    <Box p="6" width={"100%"}>
      <Grid gap="6" mt={"5vh"}>

        {/* Analytics */}
        <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap="6">
          <Card.Root p="5">
            <Text color="gray.500">Total Products</Text>
            <Heading size="md">{products.length}</Heading>
          </Card.Root>

          <Card.Root p="5">
            <Text color="gray.500">Low Stock</Text>
            <Heading size="md">12</Heading>
          </Card.Root>

          <Card.Root p="5">
            <Text color="gray.500">Categories</Text>
            <Heading size="md">8</Heading>
          </Card.Root>

          <Card.Root p="5">
            <Text color="gray.500">Revenue</Text>
            <Heading size="md">$24K</Heading>
          </Card.Root>
        </Grid>

        {/* Products Grid */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)"
          }}
          gap="6"
        >
          {products.slice(0, 12).map((product) => (
            <Card.Root key={product.id} overflow="hidden">
              {/*eslint-disable-next-line jsx-a11y/alt-text */}
              <Image
                src={product.thumbnail}
                h="180px"
                w="100%"
                objectFit="cover"
              />

              <Box p="4">
                <Heading size="sm" mb="2">
                  {product.title}
                </Heading>

                <Text fontSize="sm" color="gray.500" mb="3">
                  ${product.price}
                </Text>

                <Flex justify="space-between" align="center">
                  <Badge colorPalette="blue">
                    {product.category}
                  </Badge>

                  <Button size="sm">View</Button>
                </Flex>
              </Box>
            </Card.Root>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}