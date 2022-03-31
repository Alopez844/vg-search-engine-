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

function Friend002({friend}) {
  return (
    <Link to={`/FriendProfile002/${friend.id}`} >
    <Flex direction="column" alignItems={"center"}>
            <Avatar
              size={"md"}
              src={
                "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
              }
            />
              <Text fontSize="md">Matt Doe{/* {friend.name} */}</Text>
    </Flex>
    </Link>
)
}

export default Friend002