import DefaultLayout from "@layouts/default";
import Link from "next/link";
import { getConfig, getAllPosts } from "@api";
import Hero from "../_components/hero";
import Cta from "../_components/cta";
import services from "../_data/services.json";
import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/layout";
import Section from "_components/section";
import { Image } from "@chakra-ui/image";
import { FaBeer } from "react-icons/fa";
import { Button } from "@chakra-ui/button";
import Contact from "_components/contact";

export default function Blog(props) {
  console.log("services", services);
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <Hero address={props.address} tel={props.telephone} />
      <SimpleGrid columns="2">
        {" "}
        <Cta
          price="59"
          title="Synthetic Oil Change"
          terms="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit placeat numquam quia vero, explicabo eum repudiandae accusamus earum dicta id sapiente nemo, facere tempora nam commodi voluptatum? Modi, consequatur."
          variant
        />{" "}
        <Cta
          price="29"
          title="Standard Oil Change"
          terms="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit placeat numquam quia vero, explicabo eum repudiandae accusamus earum dicta id sapiente nemo, facere tempora nam commodi voluptatum? Modi, consequatur."
        />
      </SimpleGrid>
      <Box bg="gray.800" py="28" color="white">
        <Container maxW="container.xl">
          <SimpleGrid
            columns={["1", "7"]}
            alignItems="start"
            justifyItems="center"
            gap="24"
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="md"
            textAlign="center"
          >
            {services.slice(0, 7).map((service, idx) => (
              <SimpleGrid
                justifyItems="center"
                gap="6"
                p="8"
                w="225px"
                my="4"
                key={idx}
              >
                <Image src={service.icon} />
                {service.title}
              </SimpleGrid>
            ))}
          </SimpleGrid>
          <Flex alignContent="center" justifyContent="center" mt="12">
            <Button colorScheme="white"  fontSize='2xl'>
              All Services
            </Button>
          </Flex>
        </Container>
      </Box>
      <Section
        title="Quality Auto Repair Services in Puerto Rico"
        description="Expertise, knowledge and integrity. RR Performance is the auto shop you can trust."
      >
        <Container maxW="container.xl">
          <Divider mt="4" mb="8" />
          <SimpleGrid columns="2" spacing="20">
            <SimpleGrid fontSize="lg" spacing="8" alignContent="start">
              <Text>
                Highly skilled on all levels of complete, bumper-to-bumper
                vehicle service and customer care. Puerto Rico auto repairs from
                a company you can trust!
              </Text>
              <UnorderedList>
                <ListItem>ASE Certified</ListItem>
                <ListItem>Nissan Master Technician</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
            </SimpleGrid>
            <Box>
              <Image src="../img/parts-brands.png" />
            </Box>
          </SimpleGrid>
        </Container>
        <Image src="img/car-brands.svg" />
      </Section>
      
      <Contact address={props.address} tel={props.telephone} />
      
      
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const config = await getConfig();
  const allPosts = await getAllPosts();

  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description,
      address: config.address,
      telephone: config.telephone
    },
  };
}
