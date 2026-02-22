import {
  Table,
  Card,
  Heading,
} from "@chakra-ui/react";
import { getProducts } from "@/_lib/services/getData";

//these types and interfaces will be moved and are temporarily here

type Product = {
  id: number;
  title: string;
  price: number;
}

export default async function ProductsTable() {
  const { products } = await getProducts();

  return (
    <Card.Root 
      p="6"
      shadow={"lg"}
      borderRadius={"1rem"}
    >
      <Heading size="sm" mb="4">
        Recent Products
      </Heading>

      <Table.ScrollArea borderWidth="1px" rounded="md" height="160px">
      <Table.Root size="sm" stickyHeader>
        <Table.Header>
          <Table.Row bg="bg.subtle">
            <Table.ColumnHeader>Product</Table.ColumnHeader>
            <Table.ColumnHeader>Category</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((item: Product) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.title}</Table.Cell>
              {/* <Table.Cell>{item.category}</Table.Cell> */}
              <Table.Cell textAlign="end">{item.price}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        
      </Table.Root>
    </Table.ScrollArea>
    </Card.Root>
  );
}