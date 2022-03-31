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

function Friend001({friend}) {
  return (
    <Link to={`/FriendProfile001/${friend.id}`} >
    <Flex direction="column" alignItems={"center"}>
            <Avatar
              size={"md"}
              src={
                "https://bit.ly/dan-abramov"
              }
            />
              <Text fontSize="md">John Doe{/* {friend.name} */}</Text>
    </Flex>
    </Link>
)
}

export default Friend001