import { Img } from "@chakra-ui/image";
import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/layout";

import React from "react";
import { FaMapSigns, FaPhoneAlt } from "react-icons/fa";

const Hero = (props) => {
  return (
    <Flex
      as="section"
      minH="50vh"
      alignContent="center"
      alignItems="center"
      position="relative"
      overflow="hidden"
      bgGradient="radial(rgba(0,0,0,0.6),rgba(0,0,0,0.6))"
    >
      <Box
        as="video"
        position="absolute"
        top="0"
        zIndex="-9"
        src="../../videos/hero.mp4"
        type="video/mp4"
      ></Box>

      <Container maxW="container.xl">
        <SimpleGrid
          justifyItems="center"
          gap="8"
          alignContent="center"
          columns={("1", "2")}
        >
          <SimpleGrid spacing="3" alignContent="center" color="white" gap='4'>
            {" "}
            <Heading
              as="h2"
              textTransform="uppercase"
              fontStyle="italic"
              fontWeight="black"
              fontSize="6xl"
              lineHeight="1"
            >
              Let us help you get your car back on the road
            </Heading>
            <Divider />
            <Text fontSize="xl" fontWeight="bold">
              Expert, stress free auto repair services. Call Today!
            </Text>
            <Stack direction={["column", "row"]} spacing="12" color="white">
              <HStack spacing="4">
                <Center>
                  <FaPhoneAlt size="2em" />
                </Center>
                <SimpleGrid>
                  <Text as="small" fontSize="3xl" fontWeight="black">
                    {props.tel}
                  </Text>
                </SimpleGrid>
              </HStack>
              <HStack spacing="4">
                <Center>
                  <FaMapSigns size="2em" />
                </Center>
                <SimpleGrid>
                  <Text as="small" w="200px"  fontWeight="bold">
                    {props.address}
                  </Text>
                </SimpleGrid>
              </HStack>
            </Stack>
          </SimpleGrid>
          <Img src="img/rrp-logo-white.svg" width="75%" alt="" />
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Hero;
