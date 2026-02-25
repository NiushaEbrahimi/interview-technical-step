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
  // Link
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { Toaster, toaster } from "@/components/ui/toaster"
import { Tooltip } from "@/components/ui/tooltip"
import { login } from "@/_lib/authClientService";

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)

    try {
      console.log('Attempting login with:', { username, password })
      await login(username, password)
      toaster.success({
        title: 'Successful Login',
        description: 'User logged in successfully',
        duration: 3000,
        closable: true,
      })
      router.push('/dashboard/dashboard')
    } catch (err: any) {
      console.log(err.message)
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
        position="relative"
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
              <FormButton loading={loading}/>
            </Stack>
          </form>

        </Stack>
        <Box 
          position={"absolute"}
          top={{md: "100%", lg: "0"}}
          right={{md: "50%", lg: "-12%"}}
          translate={{md: "50% 50%", lg: ""}}
        >
          <TooltipLogin/>
        </Box>
      </Card.Root>
    </Flex>
  );
}

const FormButton = ({ loading } : { loading : boolean }) => {
  return(
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Button
        type="submit"
        bg={loading ? "gray.200" : "#3ab684"}
        size="lg"
        mt="2"
      >
        {loading ? 
        <Box display="flex" justifyContent="center" alignItems="center">
            <ProgressCircle.Root value={null} size={"sm"} >
                <ProgressCircle.Circle >
                    <ProgressCircle.Track stroke={"gray.100"}/>
                    <ProgressCircle.Range  stroke={"#3ab684"} strokeLinecap={"round"}/>
                </ProgressCircle.Circle>
            </ProgressCircle.Root>
        </Box>
        : 'Login'}
      </Button>
    </Box>
  )
}

const TooltipLogin = () => {
  return (
    <Tooltip
      content="Since this is based on dummy.json, use an existing user,
      username: emilys, password: emilyspass"
      positioning={{ placement: "right-start" }}
      contentProps={{ css: { "max-width" : "15vw" } }}

    >
      <Button 
        variant="outline" 
        size="sm" 
        padding={"1rem"} 
        borderRadius={"xl"}
        bgColor={"#3ab684"}
        color={"white"}
      >
        Note
      </Button>
    </Tooltip>
  )
}
