import { Box, Heading } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <>
      <Heading size="lg" mb="6">
        Main Section
      </Heading>

      <Box
        h="400px"
        bg="white"
        borderRadius="xl"
        border="1px solid"
        borderColor="gray.200"
      />
    </>
  );
}