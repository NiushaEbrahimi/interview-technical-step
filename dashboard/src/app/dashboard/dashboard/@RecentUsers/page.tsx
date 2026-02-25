import { Card, Heading, VStack, HStack, Text } from "@chakra-ui/react";
import { User } from "lucide-react";
import { getUsers } from "@/_lib/services/getData";
import { UserType } from "@/_lib/types"


export default async function RecentUsers() {
  const limit : number = 7;
  const { users } = await getUsers({limit, recent: true});

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
        {users.map((user : UserType) => (
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