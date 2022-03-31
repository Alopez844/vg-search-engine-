import {
  Box,
  Container,
  Stack,
  Image,
  Text,
  useBreakpointValue,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import {Link as RouterLink} from "react-router-dom"

  
  export default function SmallWithNavigation() {
    return (
      <div style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        right: 0,
      }} ><Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={6} align={useBreakpointValue({ base: 'center'})}>
          <Image
            align={useBreakpointValue({ base: 'center', md: 'left' })}
            color={useColorModeValue('gray.800', 'white')}
            src="https://www.seekpng.com/png/detail/949-9498559_video-game-controller-clipart-green.png"
            boxSize="20px" />
            <Link as={RouterLink} to={'/'}>Home</Link>
            <Link as={RouterLink} to={'/profile'}>Profile</Link>
        </Stack>
          <Text>© 2020 Video Game SE. All rights reserved</Text>
        </Container>
      </Box>
      </div>
    );
  }