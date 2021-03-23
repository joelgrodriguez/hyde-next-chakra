import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/layout'
import React from 'react'

const Header = ({title, description}) => {
    return (
        <Container maxW="container.xl">
            <SimpleGrid gap="4">
            
                <Heading as="h2" fontSize="7xl" fontWeight="black" color="blue.500" textTransform="uppercase" fontStyle="italic">{title}</Heading>
                <Text fontSize="2xl" fontWeight="medium" letterSpacing=".02rem">{description}</Text>
            </SimpleGrid>
        </Container>
    )
}

export default Header
