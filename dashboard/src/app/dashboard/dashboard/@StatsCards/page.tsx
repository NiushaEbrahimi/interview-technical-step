import { SimpleGrid, Card, Stat, Box} from "@chakra-ui/react";
import { DollarSign, ShoppingBag, ShoppingCart, Users } from "lucide-react";
import { getProductsStats, getUsersStats } from "@/_lib/services/getStats";

export default function StatsCards() {

  const totalUsers =  getUsersStats()
  const totalProducts = getProductsStats()

  const stats = [
    { label: "Total Sales", value: "$123,456", icon: DollarSign },
    { label: "Total Customers", value: totalUsers , icon: Users },
    { label: "Total Products", value: totalProducts, icon: ShoppingBag },
    { label: "Total Orders", value: "34,567", icon: ShoppingCart },
  ]
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="6" mb="6">
      {stats.map((item) => (
        <Card.Root key={item.label} p="5" borderRadius={"1rem"} shadow={"md"}>
          <Stat.Root
            display="flex"
            flexDirection={"row"}
            gap={"10px"}
          >
            <Box 
              bg={"#5bd8a624"}
              borderRadius="full"
              p="3"
              color={"var(--main-color)"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <item.icon 
                size={24}
              />
            </Box>
            <Box 
              display="flex"
              flexDirection={"column"}
            >
              <Stat.Label>{item.label}</Stat.Label>
              <Stat.ValueText>{item.value}</Stat.ValueText>
            </Box>
          </Stat.Root>
        </Card.Root>
      ))}
    </SimpleGrid>
  );
}