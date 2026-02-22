"use client";

import {
  Card,
  Input,
  Button,
  Heading,
  Text,
  Stack,
  Field,
  Flex,
  Link
} from "@chakra-ui/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // You will handle authentication here
    console.log({ email, password });
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="gray.50"
      p="4"
    >
      <Card.Root 
        p="8" 
        w="full" 
        maxW="420px"
        borderRadius={"1rem"}
        shadow={"lg"}
      >
        <Stack gap="6">
          <Heading size="lg" textAlign="center">
            Sign in
          </Heading>

          <Text textAlign="center" color="gray.500">
            Enter your credentials to access the dashboard
          </Text>

          <form onSubmit={handleSubmit}>
            <Stack gap="4">
              <Field.Root>
                <Field.Label>Email</Field.Label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Password</Field.Label>
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Field.Root>

              <Button
                type="submit"
                colorPalette="blue"
                size="lg"
                mt="2"
              >
                Login
              </Button>
            </Stack>
          </form>

          <Flex justify="space-between" fontSize="sm">
            <Link href="#">Forgot password?</Link>
            <Link href="#">Create account</Link>
          </Flex>
        </Stack>
      </Card.Root>
    </Flex>
  );
}