import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Link,
    Flex,
    Stack,
    Image,
  } from "@chakra-ui/react";
  
  const IMAGE =
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Resident_Evil_3.jpg/220px-Resident_Evil_3.jpg";
  
  export default function ProductSimple() {
    return (
      <Link href="https://store.steampowered.com/app/952060/Resident_Evil_3/" >
      <Flex py={12}>
      <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={IMAGE}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              Resident Evil
            </Heading>
          </Stack>
        </Box>
        </Flex>
    </Link>    
    );
  }