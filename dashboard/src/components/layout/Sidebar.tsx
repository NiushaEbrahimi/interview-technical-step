"use client";

import { Box, VStack, Text } from "@chakra-ui/react";
import { Home, Settings, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", icon: Home, href: "/dashboard" },
  { name: "Products", icon: ShoppingCart, href: "/dashboard/products" },
  { name: "Users", icon: User, href: "/dashboard/users" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" }
];

export default function Sidebar() {
  const pathname = usePathname();

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

      <VStack align="stretch" gap="2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link key={item.name} href={item.href} style={{ width: "100%" }}>
              <Box
                display="flex"
                alignItems="center"
                gap="3"
                px="4"
                py="2"
                borderRadius="md"
                cursor="pointer"
                bg={isActive ? "#5bd8a624" : "transparent"}
                color={isActive ? "#3ab684" : "gray.700"}
                fontWeight={isActive ? "semibold" : "normal"}
                _hover={{ bg: "#5bd8a624" }}
                transition="all 0.2s"
              >
                <item.icon size={18} />
                {item.name}
              </Box>
            </Link>
          );
        })}
      </VStack>
    </Box>
  );
}