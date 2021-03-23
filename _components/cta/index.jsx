const { Button } = require("@chakra-ui/button");
const { SimpleGrid, HStack, Text, Box } = require("@chakra-ui/layout");

const index = ({ price, title, terms, link, variant}) => {
  return (
    <Box px="20" py="12" bg={variant ? `blue.500` : `gray.200`} color={variant ? `white` : `gray.800`}>
      <SimpleGrid gap="8">
        <HStack>
          <Text fontSize="4xl" fontWeight="bold">${price}</Text>
          <Text fontWeight="medium" fontSize="2xl">{title}</Text>
        </HStack>
        <Text fontSize="xl">
          {terms}
        </Text>
        <Button mt="2" bg={variant ? `gray.200` : `blue.500`} color={variant ? `gray.800` : `white`}>Reedem Now</Button>
      </SimpleGrid>
    </Box>
  );
};

export default index;
