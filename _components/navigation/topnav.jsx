import { Box, Container, Text } from '@chakra-ui/layout'
import Link from 'next/link'
import React from 'react'

const TopNav = () => {
    return (
       
            <Box textAlign="center"  bg="blue.500" fontWeight="black" >
                <Link href="/">
                    <Text as="a" color="white" py="4" display="hidden">Call Us Now: 787.888.8888</Text>
                </Link>
            </Box>
       
    )
}

export default TopNav
