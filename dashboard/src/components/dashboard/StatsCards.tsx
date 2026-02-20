import { SimpleGrid, Card, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

export default function StatsCards({ stats }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="6" mb="6">
      {stats.map((item) => (
        <Card key={item.label} p="5">
          <Stat>
            <StatLabel>{item.label}</StatLabel>
            <StatNumber>{item.value}</StatNumber>
          </Stat>
        </Card>
      ))}
    </SimpleGrid>
  );
}