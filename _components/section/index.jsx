import { Box, Container } from '@chakra-ui/layout'
import Header from './header'
import React from 'react'

const Section = ({title, description, children}) => {
    return (
        <Box py="24">
        <Header title={title} description={description} />
        {children}
        </Box>
    )
}

export default Section
