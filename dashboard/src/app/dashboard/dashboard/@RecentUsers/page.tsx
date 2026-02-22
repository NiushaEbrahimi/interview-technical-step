import { Card, Heading, VStack, HStack, Text } from "@chakra-ui/react";
import { User } from "lucide-react";
import { getUsers } from "@/_lib/services/getData";

// TODO: type here is temporary
type User = {
  id: string;
  firstName: string;
  lastName: string;
};


export default async function RecentUsers() {
  const { users } = await getUsers();

  return (
    <Card.Root 
      p="6"
      shadow={"lg"}
      borderRadius={"1rem"}
    >
      <Heading size="sm" mb="4">
        New Users
      </Heading>

      <VStack align="stretch">
        {users.map((user : User) => (
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