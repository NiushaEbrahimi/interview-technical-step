"use client";

import {
  Box,
  ProgressCircle,
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
import { useRouter } from 'next/navigation'
import { authAPI } from "@/_lib/auth";
import { Toaster, toaster } from "@/components/ui/toaster"

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  // TODO: use this error message
  const [error, setError] = useState('')

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('')
    setLoading(true)

    try {
      await authAPI.login(username, password)
      toaster.success({
        title: 'Successful Login',
        description: 'User logged in successfully',
        duration: 3000,
        closable: true,
      })
      router.push('/dashboard')
    } catch (err: any) {
      setError('username or password is incorrect')
      toaster.error({
        title: 'Error Loging in',
        description: err.message,
        duration: 5000,
        closable: true,
      })
    } finally {
      setLoading(false)
    }
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
        <Toaster />
        <Stack gap="6">
          <Heading size="lg" textAlign="center">
            Login
          </Heading>

          <Text textAlign="center" color="gray.500">
            Enter your credentials to access the dashboard
          </Text>

          <form onSubmit={handleSubmit}>
            <Stack gap="4">
              <Field.Root>
                <Field.Label>Username</Field.Label>
                <Input
                  type="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                {loading ? 
                <Box minWidth={"80vw"} minHeight={"90vh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <ProgressCircle.Root value={null} size="lg">
                        <ProgressCircle.Circle>
                            <ProgressCircle.Track stroke={"gray.100"}/>
                            <ProgressCircle.Range  stroke={"#3ab684"} strokeLinecap={"round"}/>
                        </ProgressCircle.Circle>
                    </ProgressCircle.Root>
                </Box>
                : 'Login'}
              </Button>
            </Stack>
          </form>

          {/* <Flex justify="space-between" fontSize="sm">
            <Link href="#">Forgot password?</Link>
            <Link href="#">Create account</Link>
          </Flex> */}
        </Stack>
      </Card.Root>
    </Flex>
  );
}