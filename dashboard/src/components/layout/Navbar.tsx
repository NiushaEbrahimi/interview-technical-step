"use client";

import {
  Flex,
  Heading,
  Input,
  InputGroup,
  HStack,
  IconButton,
  Menu,
  Box,
  Float,
  Circle,
  Button, 
  Portal, 
  Stack
} from "@chakra-ui/react";

import { Search, Bell, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react"

function formatTitle({pathname} : {pathname: string}) {
  const segments = pathname.split("/").filter(Boolean);
  const last = segments[segments.length - 1] || "dashboard";

  return last
    .replace("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Navbar() {
  const pathname = usePathname();
  const title = formatTitle({pathname});

  return (
    <Flex
      position="fixed"
      top="2vh"
      left="50%"
      transform="translateX(-50%)"
      minW={{ base: "90%", md: "55%" }}
      maxW="1200px"
      zIndex={1030}
      px={{ base: 4, md: 6 }}
      py={2}
      align="center"
      justify="space-between"
      borderRadius="2rem"
      bg="#ffffff5a"
      border="1px solid"
      borderColor="rgba(0, 0, 0, 0.1)"
      backdropFilter="blur(6px) saturate(120%)"
    >
      <Box>
        <Heading as={"h2"}>{title}</Heading>
      </Box>

      <HStack padding={"1"} gap={"4"}>

        <InputGroup
          bg={"white"}
          maxW="280px"
          borderRadius={"1rem"}
          startElement={<Search size={18}
        />}>
          <Input
            borderRadius={"1rem"}
            placeholder="Search..."
          />
        </InputGroup>

        <IconButton
          aria-label="Notifications"
          variant="ghost"
          bg={"white"}
          borderRadius="4xl"
          border="1px solid"
          borderColor="gray.200"
        >
            <Bell/>
            <Float>
                <Circle size="5" bg="red" color="white">
                    3
                </Circle>
            </Float>
        </IconButton>

        <MenuExample></MenuExample>

      </HStack>
    </Flex>
  );
}

// temporarilly
const MenuExample = () => {
    const [open, setOpen] = useState(false)
    // for now
    const username = "Niusha"

    return (
        <Stack gap="4" align="flex-start" >
        <Menu.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Menu.Trigger asChild>
            <Button bg={"white"} variant="outline" size="sm" borderRadius={"1rem"}>
                <User size={18} />
                {username}
            </Button>
            </Menu.Trigger>
            <Portal>
            <Menu.Positioner>
                <Menu.Content>
                <Menu.Item value="edit-profile">Edit Profile</Menu.Item>
                <Menu.Item value="messages">Messages</Menu.Item>
                <Menu.Item value="logout">Logout</Menu.Item>
                </Menu.Content>
            </Menu.Positioner>
            </Portal>
        </Menu.Root>
        </Stack>
    )
}
