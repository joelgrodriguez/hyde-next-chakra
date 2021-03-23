import { Button, ButtonGroup, } from "@chakra-ui/button";
import { Img } from "@chakra-ui/image";
import {
  Box,
    Center,
  Container,
  Divider,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapSigns
} from "react-icons/fa";

const Contact = (props) => {
  return (
    <Box
      backgroundImage="url('/img/shop-bg.png')"
      minH="600px"
      bgRepeat="no-repeat"
      fontWeight="medium"
      pb="24"
    >
      <Container maxW="container.xl">
        <SimpleGrid bgImage="url('')" columns={["1", "2"]}>
          <Box></Box>
          <SimpleGrid
            w="400px"
            justifySelf="end"
            justifyItems="stretch"
            textAlign="center"
            bgColor="rgba(255,255,255,.5)"
            gap="6"
          >
            <Img src="../../img/rrp-logo.svg" w="50%" justifySelf="center" />
            <Heading
              as="h3"
              fontSize="4xl"
              fontWeight="black"
              textTransform="uppercase"
            >
              Have questions? Let's Connect.
            </Heading>
            <Divider />
            <SimpleGrid columns="2" spacing="10">
              <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                Facebook
              </Button>
              <Button
                bgColor="orange.700"
                color="white"
                leftIcon={<FaInstagram />}
              >
                Instagram
              </Button>
            </SimpleGrid>
            <SimpleGrid
              columns="2"
              justifyContent="stretch"
              justifyItems="stretch"
              spacing="10"
            >
              <Button
                bgColor="green.500"
                color="white"
                leftIcon={<FaPhoneAlt />}
              >
                Call Us
              </Button>
              <Button
                bg="blue.500"
                color="white"
                leftIcon={<FaEnvelope />}
                w="100%"
              >
                Email
              </Button>
            </SimpleGrid>
            <Divider />
            <HStack spacing="4">
                <Center>
                  <FaPhoneAlt size="2em" />
                </Center>
                <SimpleGrid>
                  <Text as="span" fontSize="2xl" textAlign="start"  fontWeight="bold">
                    {props.tel}
                  </Text>
                </SimpleGrid>
              </HStack>
            <HStack spacing="4">
                <Center>
                  <FaMapSigns size="2em" />
                </Center>
                <SimpleGrid>
                  <Text as="span" fontSize="lg" textAlign="start"  fontWeight="bold">
                    {props.address}
                  </Text>
                </SimpleGrid>
              </HStack>
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contact;
