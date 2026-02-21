"use client";

import {
  Box,
  Grid,
  Card,
  Heading,
  Input,
  Text,
  Button,
  Switch,
  Flex,
  Stack,
  GridItem
} from "@chakra-ui/react";
import { User } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // TODO : fix 
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Box p="6">
      <Grid 
        templateColumns={{
          base: "1fr",
          lg: "repeat(12, 1fr)",
        }}
        templateRows={{
          base: "repeat(5, 1fr)",
          lg: "2fr 2fr 30px",
        }}
        gap="6"
        p="6"
      >

        {/* Profile Profile */}
        <GridItem 
          colSpan={{ base: 12, xl: 7 }}
          height={"100%"}
          shadow={"lg"}
          borderRadius={"1rem"}
        >
          <Card.Root 
            p="6"
            borderRadius={"1rem"}
            height={"100%"}
          >
            <Heading size="md" mb="4">
              Profile
            </Heading>

            <Flex gap="6" align="center" flexWrap="wrap">
              {/* TODO: Replace with users image */}
              <User/>

              <Stack flex="1" minW="250px">
                <Input placeholder="Full Name" />
                <Input placeholder="Email Address" />
              </Stack>
            </Flex>
          </Card.Root>
        </GridItem>

        {/* Appearance */}
        <GridItem 
          height={"100%"}
          colSpan={{ base: 12, xl: 5 }}
          shadow={"lg"}
          borderRadius={"1rem"}
        >
          <Card.Root 
            p="6"
            borderRadius={"1rem"}
            height={"100%"}
          >
            <Heading size="md" mb="4">
              Appearance
            </Heading>

            <Flex
              align="center"
              justify="space-between"
              flexWrap="wrap"
              gap="4"
            >
              <Text>Theme Mode</Text>

              <Flex gap="3">
                <Button
                  variant={resolvedTheme === "light" ? "solid" : "outline"}
                  onClick={() => setTheme("light")}
                >
                  Light
                </Button>

                <Button
                  variant={resolvedTheme === "dark" ? "solid" : "outline"}
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </Button>
              </Flex>
            </Flex>
          </Card.Root>
        </GridItem>

        {/* Notifications */}
        <GridItem 
          colSpan={{ base: 12, xl: 4 }}
          shadow={"lg"}
          height={"100%"}
          borderRadius={"1rem"}
        >
          <Card.Root 
            p="6"
            borderRadius={"1rem"}
            height={"100%"}
          >
            <Heading size="md" mb="4">
              Notifications
            </Heading>

            <Stack gap="4">
                  <SwitchElement label="Product Updates" />
                  
                  <SwitchElement label="Email Notifications" />

                  <SwitchElement label="Marketing Emails" />
            </Stack>
          </Card.Root>
        </GridItem>

        {/* Security */}
        <GridItem 
          colSpan={{ base: 12, xl: 8 }}
          shadow={"lg"}
          height={"100%"}
          borderRadius={"1rem"}
        >
          <Card.Root 
            p="6"
            borderRadius={"1rem"}
            height={"100%"}
          >
            <Heading size="md" mb="4">
              Security
            </Heading>

            <Stack gap="4">
              <Input placeholder="Current Password" type="password" />
              <Input placeholder="New Password" type="password" />
              <Input placeholder="Confirm Password" type="password" />
            </Stack>
          </Card.Root>
        </GridItem>

        <Flex justify="flex-end">
          <Button colorPalette="blue" size="lg">
            Save Changes
          </Button>          
        </Flex>
          
      </Grid>
    </Box>
  );
}

const SwitchElement = ({label}:{label:string}) => {
  return (
    <Switch.Root>
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label>{label}</Switch.Label>
    </Switch.Root>
  )
}