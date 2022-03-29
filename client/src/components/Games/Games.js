import React from "react";
import { Box, Image, StarIcon, Badge } from '@chakra-ui/react'
import { Stack, HStack, VStack } from "@chakra-ui/react";

function Games() {
    const card01 = {
      imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/976730/capsule_616x353.jpg?t=1634144453',
      title: 'Halo',
      reviewCount: 50,
      rating: 4.5,
    }

    const card02 = {
        imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Resident_Evil_3.jpg/220px-Resident_Evil_3.jpg',
        title: 'Resident Evil 3',
        reviewCount: 34,
        rating: 4,
      }
  
      const card03 = {
          imageUrl:'https://i.ytimg.com/vi/JldMvQMO_5U/maxresdefault.jpg',
          title: 'Elden Ring',
          reviewCount: 46,
          rating: 4.6,
      }

  const data = [{ id: "oo1" }, { id: "oo1" }, { id: "oo1" }];

  return (
    //   Loop through the game data
    // {data.length > 0 ? (): ()}
    <HStack spacing="24px">
      <Box maxW='sm' borderWidth='1rem' borderRadius='lg' overflow='hidden'>
      <Image src={card01.imageUrl} alt={card01.imageAlt} boxSize={300} />

      <Box p='6'>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {card01.title}
        </Box>
        </Box>
        <Box display='flex' mt='2' alignItems='center'>
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {card01.reviewCount} reviews
          </Box>
        </Box>
      </Box>

      <Box maxW='sm' borderWidth='1rem' borderRadius='lg' overflow='hidden'>
      <Image src={card02.imageUrl} alt={card02.imageAlt} boxSize={300} />

      <Box p='6'>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {card02.title}
        </Box>
        </Box>
        <Box display='flex' mt='2' alignItems='center'>
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {card02.reviewCount} reviews
          </Box>
        </Box>
      </Box>

      <Box maxW='sm' borderWidth='1rem' borderRadius='lg' overflow='hidden'>
      <Image src={card03.imageUrl} alt={card03.imageAlt} boxSize={300} />

      <Box p='6'>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {card03.title}
        </Box>
        </Box>
        <Box display='flex' mt='2' alignItems='center'>
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {card03.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </HStack>
  );
}

export default Games;
