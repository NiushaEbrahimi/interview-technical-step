import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/dashboard/Sidebar";
import React from "react";
import Navbar from "../../components/dashboard/Navbar";

export default function DashboardLayout({ children } : { children: React.ReactNode }) {
  return (
    <Flex minH="100vh" bg="gray.50">
      <Sidebar />
      <Box flex="1" p="6">
        <Navbar></Navbar>
        <Box
          h="400px"
          bg="white"
          borderRadius="xl"
          border="1px solid"
          borderColor="gray.200"
        >
          {children}
        </Box>
      </Box>
    </Flex>
  );
}