import { Grid, GridItem } from "@chakra-ui/react";
import StatsCards from "@/components/dashboard/StatsCards";
import ChartsSection from "@/components/dashboard/ChartsSection";
import RecentUsers from "@/components/dashboard/RecentUsers";
import ProductsTable from "@/components/dashboard/ProductsTable";

// these two functions are temporarily here
async function getProducts() {

  const res = await fetch('https://dummyjson.com/products/category/smartphones?select=title,price');
  // console.log(res);
  
  if (!res.ok) throw new Error('Failed to fetch products');

  return res.json();
}

async function getUsers() {

  const res = await fetch('https://dummyjson.com/users?limit=5&skip=10');
  console.log(res);
  
  if (!res.ok) throw new Error('Failed to fetch users');

  return res.json();
}

export default async function Dashboard() {
  const products = await getProducts();
  const users = await getUsers();

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        lg: "repeat(12, 1fr)",
      }}
      gap="6"
      p="6"
    >
      <GridItem colSpan={{ base: 12 }}>
        <StatsCards />
      </GridItem>

      <GridItem colSpan={{ base: 12, xl: 8 }}>
        <ChartsSection />
      </GridItem>

      <GridItem colSpan={{ base: 12, xl: 4 }}>
        <RecentUsers users={users.users} />
      </GridItem>

      <GridItem colSpan={12}>
        <ProductsTable products={products.products}/>
      </GridItem> 

    </Grid>
  );
}


