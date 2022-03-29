import React, { useState } from "react";
import { Image, Box, Badge } from "@chakra-ui/react";
import {useQuery } from '@apollo/client'; 
import {QUERY_ME} from "../../utils/queries"; 

function Profile() {
    // const {loading ,data} = useQuery(QUERY_ME); 

  const [userInfo, setUserInfo] = useState({ name: "John Doe" });
// const userInfo = data?.me || {}; 
// console.log(userInfo);
  return (
    <div>
      Profile
      <Box>
        <Image
          boxSize="150px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt={userInfo.name}
        />
        <Badge borderRadius="full" px="2" colorScheme="teal">
          {/* {userInfo.username.toUpperCase()} */}
        </Badge>
      </Box>
    </div>
  );
}

export default Profile;
