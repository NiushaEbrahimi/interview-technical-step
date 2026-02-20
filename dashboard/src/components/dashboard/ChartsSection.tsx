import { Grid, Card, Heading } from "@chakra-ui/react";

export function ChartsSection() {
  return (
    <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap="6" mb="6">
      <Card p="6">
        <Heading size="sm" mb="4">
          Sales Overview
        </Heading>
      </Card>

      <Card p="6">
        <Heading size="sm" mb="4">
          Product Categories
        </Heading>
      </Card>
    </Grid>
  );
}