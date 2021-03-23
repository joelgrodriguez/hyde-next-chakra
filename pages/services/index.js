import { Box, Container, SimpleGrid, Text } from '@chakra-ui/layout'
import DefaultLayout from '@layouts/default'

import services from "../../_data/services.json";
import { getConfig, getAllPosts } from "@api";
import { Image } from '@chakra-ui/image';
import Link from 'next/link'

const Services = (props) => {
    return (
        <DefaultLayout>
        <Box bg="gray.800" py="28" color="white">
        <Container maxW="container.xl">
          <SimpleGrid
            columns={["1", "6"]}
            alignItems="start"
            justifyItems="center"
            gap="24"
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="md"
            textAlign="center"
          >
            {services.map((service, idx) => (
              <Link href="/">
                  <a>
                  <SimpleGrid
                  justifyItems="center"
                  gap="6"
                  p="8"
                  minW="225px"
                  my="4"
                  key={idx}
                >
                  <Image src={service.icon} />
                  <Text as="span" color="white">{service.title}</Text>
                </SimpleGrid>
                  </a>
              </Link>
            ))}
          </SimpleGrid>
         
        </Container>
      </Box>
        </DefaultLayout>
    )
}

export default Services

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
