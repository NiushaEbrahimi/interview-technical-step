import { Card, Heading, VStack, HStack, Text } from "@chakra-ui/react";
import { User } from "lucide-react";

export default function RecentUsers({ users }) {
  return (
    <Card.Root p="6">
      <Heading size="sm" mb="4">
        New Users
      </Heading>

      <VStack align="stretch">
        {users.map((user) => (
          <HStack key={user.id}>
            <User/>
            <Text>
              {user.firstName} {user.lastName}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Card.Root>
  );
}