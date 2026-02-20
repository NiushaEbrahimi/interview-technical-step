"use client"

import SalesOverView from "./charts/SalesOverView";
import ProductCategories from "./charts/ProductCategories";
import { Grid, Card, Heading } from "@chakra-ui/react";

export default function ChartsSection() {
  return (
    <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="6" mb="6">
      <Card.Root p="6">
        <Heading size="sm" mb="4">
          Sales Overview
        </Heading>
        <SalesOverView/>
      </Card.Root>

      <Card.Root p="6">
        <Heading size="sm" mb="4">
          Product Categories
        </Heading>
        <ProductCategories />
      </Card.Root>
    </Grid>
  );
}