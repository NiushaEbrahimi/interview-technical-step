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
      align="center"
      justify="space-between"
      bg="rgba(255,255,255,0.1)"
      px="6"
      py="2"
      borderRadius="2xl"
      border="1px solid"
      borderColor="gray.200"
      position="sticky"
      top="0"
      zIndex="10"
      filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}
    >
      <Box 
        position={"absolute"}
        bg={"white"}
        top={"0px"}
        left={"0px"}
        width={"100%"}
        filter="blur(5px)"
        height={"100%"}
        zIndex={"-1"}
      ></Box>
      <Box>
        <Heading as={"h2"}>{title}</Heading>
      </Box>

      <HStack padding={"1"} gap={"4"}>

        <InputGroup maxW="280px" startElement={<Search size={18} />}>
          <Input placeholder="Search..." />
        </InputGroup>

        <IconButton
          aria-label="Notifications"
          variant="ghost"
          bg={"gray.100"}
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

const MenuExample = () => {
    const [open, setOpen] = useState(false)
    // for now
    const username = "Niusha"

    return (
        <Stack gap="4" align="flex-start">
        <Menu.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Menu.Trigger asChild>
            <Button variant="outline" size="sm">
                <User size={18} />
                {username}
            </Button>
            </Menu.Trigger>
            <Portal>
            <Menu.Positioner>
                <Menu.Content>
                <Menu.Item value="new-txt">New Text File</Menu.Item>
                <Menu.Item value="new-file">New File...</Menu.Item>
                <Menu.Item value="new-win">New Window</Menu.Item>
                <Menu.Item value="open-file">Open File...</Menu.Item>
                <Menu.Item value="export">Export</Menu.Item>
                </Menu.Content>
            </Menu.Positioner>
            </Portal>
        </Menu.Root>
        </Stack>
    )
}
