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
import OriginalFriend from "../Profile/OriginalFriend";
import Game01 from "../Games/Game01"
import Game02 from "../Games/Game02"
import Game03 from "../Games/Game03"


const UserImage = ({ pic, name }) => (
  <Image src={pic || "https://bit.ly/dan-abramov"} alt={name} boxSize={200} />
);

function FriendProfile003() {
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
                      "https://media.istockphoto.com/photos/excited-woman-wearing-rainbow-cardigan-picture-id1327495437?b=1&k=20&m=1327495437&s=170667a&w=0&h=Vbl-XLyAnBoTkyGXXi-X1CFzuSHlNcn-dqB-sCosxFo="
                    }
                  />
                  <Flex direction="column" >
                    <Heading>Amber Doe</Heading>
                    <Text>About Me</Text>
                  </Flex>
        </HStack>

        <HStack p={3}>
          <Box w="100%" align="center" direction="column" h="400px" bg="white">
            <Heading mb={4} fontSize="4xl">Games</Heading>
            <HStack w="75%" justify="center">
              <Game01 />
              <Spacer />
              <Game02 />
              <Spacer />
              <Game03 />
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
              <Friend001 friend={{name:"Amber Doe", id:"003"}} />
            </HStack>
          </Box>
        </HStack>
      </VStack>
    </Flex>
  );
}

export default FriendProfile003;
