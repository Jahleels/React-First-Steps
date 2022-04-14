import React from 'react'
import { Box, HStack, Heading, IconButton } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

export const NavBar = () => {
    return (
        <HStack bg='cyan.50'>
            <Box p={6}>
                <Heading>Profile-creator</Heading>
            </Box>
            <IconButton colorScheme='cyan' color='white' size='lg' icon={<AddIcon />} />
        </HStack>
    )
}
