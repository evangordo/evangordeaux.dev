'use client'
import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { FaXTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function Footer() {
  return (

      <Container
      bg={useColorModeValue('gray.50', 'gray.900')}
        as={Stack}
        maxW={'3xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
     
        <Text>Evan Gordon</Text>
      
        <Stack direction={'row'} spacing={6}>
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,

              borderRadius: '100%',
            }}
          >
            <Box
             p={2}
              borderRadius={'sm'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              bg={'black'}
              _hover={{
                bg: 'black',
              }}
              _focus={{
                bg: 'black',
              }}
              mt={2}
            >
            <a href='https://x.com/EvanGordon9343' rel="noreferrer" target="_blank">  <FaXTwitter color={'white'} size={21} /></a>
            </Box>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,

              borderRadius: '100%',
            }}
          >
            <Box
             p={2}
              borderRadius={'sm'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              bg={'black'}
              _hover={{
                bg: 'black',
              }}
              _focus={{
                bg: 'black',
              }}
              mt={2}
            >
            <a href='https://github.com/evangordo' rel="noreferrer" target="_blank" > <FaGithub color={'white'}size={21} /></a> 
            </Box>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3 }}
            whileTap={{
              scale: 0.8,

              borderRadius: '100%',
            }}
          >
            <Box
            p={2}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              bg={'blue.400'}
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              mt={2}
            >
            <a href='https://www.linkedin.com/in/evan-gordo/' rel="noreferrer" target="_blank">  <FaLinkedinIn color={'white'} size={21} /></a>
            </Box>
          </motion.div>
        </Stack>
      </Container>

  )
}