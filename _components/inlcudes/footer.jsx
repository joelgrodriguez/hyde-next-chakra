import { Box, Text } from "@chakra-ui/layout";

export default function Footer() {
  return (
    <Box
      as="footer"
      px="6"
      py="3"
      bg="gray.200"
      fontWeight="black"
      textTransform="uppercase"
      textAlign="center"
      fontStyle="italic"
    >
      <Text as="span">
        &copy;{(new Date().getFullYear())} 
        <Text as="span" color="blue.500" ml="2">
          RR
        </Text>{" "}
        Performance - All Rights Reserved
      </Text>
    </Box>
  );
}
