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

function Friend003({friend}) {
  return (
    <Link to={`/FriendProfile003/${friend.id}`} >
    <Flex direction="column" alignItems={"center"}>
            <Avatar
              size={"md"}
              src={
                "https://media.istockphoto.com/photos/excited-woman-wearing-rainbow-cardigan-picture-id1327495437?b=1&k=20&m=1327495437&s=170667a&w=0&h=Vbl-XLyAnBoTkyGXXi-X1CFzuSHlNcn-dqB-sCosxFo="
              }
            />
              <Text fontSize="md">Amber Doe{/* {friend.name} */}</Text>
    </Flex>
    </Link>
)
}

export default Friend003