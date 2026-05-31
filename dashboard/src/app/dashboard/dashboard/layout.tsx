import { Grid, GridItem } from "@chakra-ui/react";
import React from "react"; 


export default async function Dashboard({ChartsSection, StatsCards, RecentUsers, ProductsTable}:{
  ChartsSection: React.ReactNode,
  StatsCards: React.ReactNode,
  RecentUsers: React.ReactNode,
  ProductsTable: React.ReactNode
}) {

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        lg: "repeat(12, 1fr)",
      }}
      gap="6"
      p="6"
    >
      <GridItem colSpan={12}>
        {StatsCards}
      </GridItem>

      <GridItem colSpan={{ base: 12, xl: 8 }}>
        {ChartsSection}
      </GridItem>

      <GridItem colSpan={{ base: 12, xl: 4 }}>
        {RecentUsers}
      </GridItem>

      <GridItem colSpan={12}>
        {ProductsTable}
      </GridItem> 

    </Grid>
  );
}


