import { Box, Container, Text } from "@chakra-ui/layout";
import TopNav from "_components/navigation/topnav";
import Nav from "_components/navigation/nav";

export default function Header() {
  return (
    <Box as="header" boxShadow="sm">
  
      <Container maxW="container.xl">
      <Nav />
      </Container>
    </Box>
  );
}
