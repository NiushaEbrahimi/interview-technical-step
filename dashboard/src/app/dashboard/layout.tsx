import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/layout/Sidebar";
import React from "react";
import Navbar from "../../components/layout/Navbar";

export default function DashboardLayout({ children } : { children: React.ReactNode }) {
  return (
    <Flex 
      maxH="100vh" 
      bg="#5bd8a624"
    >
      <Sidebar />
      <Box 
        flex="1" 
        p="6"
        maxH={"100vh"}
        overflowY={"Scroll"}
        position={"relative"}
      >
        <Navbar></Navbar>
        <Box mt={"50px"}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
}