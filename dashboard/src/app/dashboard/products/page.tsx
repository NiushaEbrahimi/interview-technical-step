import Products from "@/components/products/ProductsPage";
import { Flex } from "@chakra-ui/react";
import { getProducts } from "@/_lib/services/getData";

export default async function Dashboard() {

  const products = await getProducts();

  return (
    <Flex>
      <Products products={products.products}/>
    </Flex>
  );
}