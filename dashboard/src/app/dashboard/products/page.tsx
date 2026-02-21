import Products from "@/components/products/ProductsPage";
import { Flex } from "@chakra-ui/react";


// this is temporarily, it is used inother pages to fetch products 
// data, ideally this should be in a separate file and imported 
// here and in the products page

const getProducts = async () => {
  const res = await fetch('https://dummyjson.com/products?limit=12');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export default async function Dashboard() {

  const products = await getProducts();

  return (
    <Flex>
      <Products products={products.products}/>
    </Flex>
  );
}