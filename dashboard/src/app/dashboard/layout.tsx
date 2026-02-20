import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/dashboard/Sidebar";
import React from "react";

export default function DashboardLayout({ children } : { children: React.ReactNode }) {
  return (
    <Flex minH="100vh" bg="gray.50">
      <Sidebar />
      <Box flex="1" p="6">
        {children}
      </Box>
    </Flex>
  );
}