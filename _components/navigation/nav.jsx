import { Image } from "@chakra-ui/image";
import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import { Container } from "@chakra-ui/layout";
import Link from "next/link";
import React from "react";
import menu from '../../_data/menu.json'

const Nav = () => {
  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      alignItems="center"
      py="2"
      spacing="6"
    >
      <Link href="/">
        <a>
          <Image src="../../img/rrp-logo.png" w="150px" alt=""/>
        </a>
      </Link>
      <HStack spacing="6">
        {menu.map((item, idx) => (
          <Link href={`/${item}`}><Text as="a" color="gray.700" fontWeight="black" fontSize="xl" textTransform="uppercase" letterSpacing=".5px" fontStyle="italic" fontFamily="Montserrat">{item}</Text></Link>
        ))}
      </HStack>
    </Flex>
  );
};

export default Nav;
