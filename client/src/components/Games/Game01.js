import {
  Box,
  Center,
  Flex,
  useColorModeValue,
  Heading,
  Link,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

const IMAGE =
  "https://cdn.akamai.steamstatic.com/steam/apps/976730/capsule_616x353.jpg?t=1634144453";

export default function ProductSimple() {
  return (
    <Link href="https://store.steampowered.com/app/976730/Halo_The_Master_Chief_Collection/" >
    <Flex py={12}>
      <Box
        position={"relative"}
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
            Halo
          </Heading>
        </Stack>
      </Box>
    </Flex>
    </Link>
  );
}
