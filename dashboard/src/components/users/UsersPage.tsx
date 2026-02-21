"use client";

import {
  Box,
  Grid,
  Card,
  Heading,
  Table,
  Image,
  Text,
  Badge,
  Button,
  Flex,
} from "@chakra-ui/react";

type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
    role: string;
    status: string;
};


export default function UsersPage({users}: {users: User[]}) {

  return (
    <Box p="6">
      <Grid gap="6">

        {/* Stats */}
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="6">
          <Card.Root p="5">
            <Text color="gray.500">Total Users</Text>
            <Heading size="md">{users.length}</Heading>
          </Card.Root>

          <Card.Root p="5">
            <Text color="gray.500">Active</Text>
            <Heading size="md">{users.length}</Heading>
          </Card.Root>

          <Card.Root p="5">
            <Text color="gray.500">New This Month</Text>
            <Heading size="md">24</Heading>
          </Card.Root>
        </Grid>

        {/* Table */}
        <Card.Root p="6">
          <Table.ScrollArea borderWidth="1px" rounded="md" height="auto" maxH="400px" overflowY="auto">
            <Table.Root size="sm" stickyHeader>
                <Table.Header>
                <Table.Row bg="bg.subtle">
                    <Table.ColumnHeader>User</Table.ColumnHeader>
                    <Table.ColumnHeader>Email</Table.ColumnHeader>
                    <Table.ColumnHeader>Role</Table.ColumnHeader>
                    <Table.ColumnHeader>Status</Table.ColumnHeader>
                    <Table.ColumnHeader textAlign="end"></Table.ColumnHeader>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                {users.slice(0, 10).map((user) => (
                    <Table.Row key={user.id}>
                    <Table.Cell>
                        <Flex align="center" gap="3">
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <Image
                            src={user.image}
                        />
                        <Text>
                            {user.firstName} {user.lastName}
                        </Text>
                        </Flex>
                    </Table.Cell>

                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>Customer</Table.Cell>

                    <Table.Cell>
                        <Badge colorPalette="green">Active</Badge>
                    </Table.Cell>

                    <Table.Cell textAlign="end">
                        <Button size="sm" variant="outline">
                        View
                        </Button>
                    </Table.Cell>
                    </Table.Row>
                ))}
                </Table.Body>
            </Table.Root>
            </Table.ScrollArea>
        </Card.Root>
      </Grid>
    </Box>
  );
}