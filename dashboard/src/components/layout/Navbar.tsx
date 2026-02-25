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
  Stack,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";

import { Search, Bell, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react"
import { getCurrentUser } from "@/_lib/authClientService";
import { UserType } from "@/_lib/types";
import Image from "next/image";
import { logout } from "@/_lib/authClientService";

const formatTitle = ({pathname} : {pathname: string}) => {
  const segments = pathname.split("/").filter(Boolean);
  const last = segments[segments.length - 1] || "dashboard";

  return last
    .replace("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const MenuNavbar = ({user} : {user : UserType}) => {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    return (
        <Stack gap="4" align="flex-start">
        <Menu.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Menu.Trigger asChild>
            <Button bg="white" variant="outline" size="md" borderRadius="1rem" px={"1.5rem"}>
                <Image
                  src={user.image}
                  alt={`${user.username}'s avatar`}
                  width={24}
                  height={24}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
                {user.username}
            </Button>
            </Menu.Trigger>
            <Portal>
            <Menu.Positioner>
                <Menu.Content>
                <Menu.Item value="edit-profile" onClick={()=>{router.push("/dashboard/profile")}}>Edit Profile</Menu.Item>
                <Menu.Item value="messages">Messages</Menu.Item>
                <Menu.Item 
                  value="logout"
                >
                  <Button
                    onClick={() => {
                      logout().then(() => router.push('/login'))
                    }}
                    bg={"red.600"}
                  >
                    Logout
                    <LogOut/>
                  </Button>
                </Menu.Item>
                </Menu.Content>
            </Menu.Positioner>
            </Portal>
        </Menu.Root>
        </Stack>
    )
}

export default function Navbar() {
  const pathname = usePathname();
  const title = formatTitle({pathname});
  
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser();
        if (mounted && userData) {
          setUser(userData);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    
    fetchUser();
    
    return () => { mounted = false; };
  }, []);

  return (
    <Flex
      position="fixed"
      top="2vh"
      left="55%"
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
          startElement={<Search size={18} />}
        >
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

        {loading ? (
          <HStack gap="2">
            <SkeletonCircle size="8" />
            <Skeleton width="80px" height="24px" borderRadius="md" />
          </HStack>
        ) : user ? (
          <MenuNavbar user={user} />
        ) : (
          <Button size="sm" variant="outline" onClick={() => window.location.href = '/login'}>
            Sign In
          </Button>
        )}
      </HStack>
    </Flex>
  );
}