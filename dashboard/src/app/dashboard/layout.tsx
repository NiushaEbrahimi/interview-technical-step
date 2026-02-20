import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/dashboard/layout/Sidebar";
import React from "react";
import Navbar from "../../components/dashboard/layout/Navbar";

export default function DashboardLayout({ children } : { children: React.ReactNode }) {
  return (
    <Flex 
      maxH="100vh" 
      bg="gray.50"
    >
      <Sidebar />
      <Box 
        flex="1" 
        p="6"
        maxH={"100vh"}
        overflowY={"Scroll"}
      >
        <Navbar></Navbar>
        <Box mt={"20px"}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
}