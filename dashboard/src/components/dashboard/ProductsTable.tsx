import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Card,
  Heading,
  Badge
} from "@chakra-ui/react";

export function ProductsTable({ products }) {
  return (
    <Card p="6">
      <Heading size="sm" mb="4">
        Recent Products
      </Heading>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>Stock</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((p) => (
            <Tr key={p.id}>
              <Td>{p.title}</Td>
              <Td>${p.price}</Td>
              <Td>{p.stock}</Td>
              <Td>
                <Badge colorScheme="green">Active</Badge>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Card>
  );
}