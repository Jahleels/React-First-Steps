import { Box, Heading, HStack, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

export const MainSection = () => {
  return (
    <VStack mt='12'>
      <Heading size='lg' as='h3'>Profiles in Stock</Heading>
      <HStack>
        <Box 
        as={motion.div} 
        animate={{x: 200, rotate: 180 }} 
        transition='0.5s linear' 
        borderRadius='lg' 
        borderWidth='1px' 
        w='100px' h='100px' 
        bg='cyan.100'></Box>
      </HStack>
    </VStack>
  )
}
