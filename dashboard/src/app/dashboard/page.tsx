import { Grid, GridItem, Heading } from "@chakra-ui/react";
import StatsCards from "@/components/dashboard/StatsCards";
import ChartsSection from "@/components/dashboard/ChartsSection";
import RecentUsers from "@/components/dashboard/RecentUsers";
import ProductsTable from "@/components/dashboard/ProductsTable";

export default function Dashboard() {
  return (
    <>
      <Heading size="lg" mb="6">
        Dashboard
      </Heading>
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
        <RecentUsers />
      </GridItem>

      <GridItem colSpan={12}>
        <ProductsTable />
      </GridItem>
    </Grid>
    </>
  );
}


