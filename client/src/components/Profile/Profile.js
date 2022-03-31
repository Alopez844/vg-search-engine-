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
import Friend from "./Friend";
import Game01 from "../Games/Game01"
import Game02 from "../Games/Game02"
import Game03 from "../Games/Game03"


const UserImage = ({ pic, name }) => (
  <Image src={pic || "https://bit.ly/dan-abramov"} alt={name} boxSize={200} />
);

function Profile() {
  // const {loading ,data} = useQuery(QUERY_ME);

  const [userInfo, setUserInfo] = useState({ name: "John Doe" });
  // const userInfo = data?.me || {};
  // console.log(userInfo);
  return (
    <Flex id="profile-container" justifyContent={{ base: "flex-end" }}>
      <VStack
        w="100%"
        divider={<StackDivider borderColor="gray.200" />}
        spacing={100}
        align="stretch"
      >
        <HStack justify="center" p={3} spacing={{ base: "0", md: "6" }}>
                  <Avatar
                    mr={3}
                    size={"lg"}
                    src={
                      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                  <Flex direction="column" >
                    <Heading>Name</Heading>
                    <Text>About Me</Text>
                  </Flex>
        </HStack>

        <HStack p={3}>
          <Box w="100%" align="center" direction="column" h="400px" bg="white">
            <Heading fontSize="4xl">Games</Heading>
            <HStack justify="center">
              <Game01 />
              <Spacer />
              <Game02 />
              <Spacer />
              <Game03 />
            </HStack>
          </Box>
        </HStack>

        <HStack p={3}>
          <Box w="100%" align="center" h="400px" bg="White">
            <Heading mb={4} fontSize="4xl">Friends</Heading>
            <HStack w="75%" justify="center">
              <Friend friend={{name:"John Doe", id:"002"}}/>
              <Spacer/>
              <Friend friend={{name:"Justina Clark", id:"001"}} />
              <Spacer/>
              <Friend friend={{name:"Jane Doe", id:"003"}} />
            </HStack>
          </Box>
        </HStack>
      </VStack>
    </Flex>
  );
}

export default Profile;
