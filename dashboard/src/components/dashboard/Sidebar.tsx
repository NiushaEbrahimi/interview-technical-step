import { Box, VStack, Text } from "@chakra-ui/react";

const navItems = [
  "Dashboard",
  "Analytics",
  "Projects",
  "Users",
  "Settings"
];

export default function Sidebar() {
  return (
    <Box
      w="260px"
      bg="white"
      borderRight="1px solid"
      borderColor="gray.200"
      p="6"
      position="sticky"
      top="0"
      h="100vh"
    >
      <Text fontSize="xl" fontWeight="bold" mb="8">
        Dashboard
      </Text>

      <VStack align="stretch" gap="3">
        {navItems.map((item) => (
          <Box
            key={item}
            px="4"
            py="2"
            borderRadius="md"
            cursor="pointer"
            _hover={{ bg: "gray.100" }}
          >
            {item}
          </Box>
        ))}
      </VStack>
    </Box>
  );
}