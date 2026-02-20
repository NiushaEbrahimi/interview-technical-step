import { SimpleGrid, Card, Stat} from "@chakra-ui/react";

export default function StatsCards() {
  const stats = [
    { label: "Total Sales", value: "$123,456" },
    { label: "Total Customers", value: "12,345" },
    { label: "Total Products", value: "876" },
    { label: "Total Orders", value: "34,567" },
  ]
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="6" mb="6">
      {stats.map((item) => (
        <Card.Root key={item.label} p="5">
          <Stat.Root>
            <Stat.Label>{item.label}</Stat.Label>
            <Stat.ValueText>{item.value}</Stat.ValueText>
          </Stat.Root>
        </Card.Root>
      ))}
    </SimpleGrid>
  );
}