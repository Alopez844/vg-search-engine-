import React from 'react'
import {
    Image,
    Box,
    Badge,
    Flex,
    Avatar,
    Text,
    MenuList,
    MenuItem,
    MenuDivider,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    useColorModeValue,
    VStack,
    Grid,
    GridItem,
    StackDivider,
  } from "@chakra-ui/react";
  import {FiBell, FiChevronDown} from "react-icons/fi";
  import {Link} from "react-router-dom";

function Friend({friend}) {
  return (
    <Link to={`/FriendProfile/${friend.id}`} >
    <Flex direction="column" alignItems={"center"}>
            <Avatar
              size={"md"}
              src={
                "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              }
            />
              <Text fontSize="md">{friend.name}</Text>
    </Flex>
    </Link>
)
}

export default Friend