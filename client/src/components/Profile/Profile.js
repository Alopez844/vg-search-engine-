import React, { useState } from "react";
import { Image, Box, Badge } from "@chakra-ui/react";
import { Stack, HStack, VStack, StackDivider } from '@chakra-ui/react'
import {useQuery } from '@apollo/client'; 
import {QUERY_ME} from "../../utils/queries"; 

function Profile() {
    // const {loading ,data} = useQuery(QUERY_ME); 

  const [userInfo, setUserInfo] = useState({ name: "John Doe" });
// const userInfo = data?.me || {}; 
// console.log(userInfo);
  return (
<VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={100}
  align='stretch'
>
  <Box h='40px' bg='yellow.200'>John Doe
  <Image boxSize='200px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
          <Badge borderRadius="full" px="2" colorScheme="teal">
          {/* {userInfo.username.toUpperCase()} */}
        </Badge>
  </Box>

  <Box h='40px' bg='white'>
    About Me
  </Box>

  <Box h='40px' bg='White'>
    Favorite Games
  </Box>
</VStack>
  );
}

export default Profile;
