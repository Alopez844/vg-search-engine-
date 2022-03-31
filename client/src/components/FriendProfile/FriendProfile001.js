import React, { useState } from "react";
import {
  Image,
  Heading,
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
  Spacer,
} from "@chakra-ui/react";
import { FiBell, FiChevronDown } from "react-icons/fi";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import Friend001 from "../Profile/Friend001";
import Friend002 from "../Profile/Friend002";
import Friend003 from "../Profile/Friend003";
import Game01 from "../Games/Game01"
import Game02 from "../Games/Game02"
import Game03 from "../Games/Game03"
import Profile from "../Profile/Profile";
import OriginalFriend from "../Profile/OriginalFriend";


const UserImage = ({ pic, name }) => (
  <Image src={pic || "https://bit.ly/dan-abramov"} alt={name} boxSize={200} />
);

function FriendProfile001() {
  // const {loading ,data} = useQuery(QUERY_ME);

  const [userInfo, setUserInfo] = useState({ name: "John Doe" });
  // const userInfo = data?.me || {};
  // console.log(userInfo);
  return (
    <Flex id="profile-container" justifyContent={{ base: "flex-end" }}>
      <VStack
        w="100%"
        divider={<StackDivider borderColor="gray.200" />}
        spacing={50}
        align="stretch"
      >
        <HStack w="75%" justify="center" p={3} spacing={{ base: "0", md: "6" }}>
                  <Avatar
                    mr={3}
                    size={"lg"}
                    src={
                      "https://bit.ly/dan-abramov"
                    }
                  />
                  <Flex direction="column" >
                    <Heading>John Doe</Heading>
                    <Text>About Me</Text>
                  </Flex>
        </HStack>

        <HStack p={3}>
          <Box w="100%" align="center" direction="column" h="400px" bg="white">
            <Heading mb={4} fontSize="4xl">Games</Heading>
            <HStack w="75%" justify="center">
              <Game02 />
              <Spacer />
              <Game03 />
              <Spacer />
              <Game01 />
            </HStack>
          </Box>
        </HStack>

        <HStack p={3}>
          <Box w="100%" align="center" h="300px" bg="White">
            <Heading mb={4} fontSize="4xl">Friends</Heading>
            <HStack w="75%" justify="center">
              <OriginalFriend friend={{name:"Justina Doe", id:"001"}}/>
              <Spacer/>
              <Friend002 friend={{name:"Matt Doe", id:"002"}} />
              <Spacer/>
              <Friend003 friend={{name:"Amber Doe", id:"003"}} />
            </HStack>
          </Box>
        </HStack>
      </VStack>
    </Flex>
  );
}

export default FriendProfile001;
