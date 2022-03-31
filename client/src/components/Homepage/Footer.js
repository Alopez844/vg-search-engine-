import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
  
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
          <Stack direction={'row'} spacing={6}>
            <Link href={'/profile'}>Profile</Link>
            <Link href={'/games'}>Games</Link>
        </Stack>
          <Text>© 2020 Video Game SE. All rights reserved</Text>
        </Container>
      </Box>
      </div>
    );
  }