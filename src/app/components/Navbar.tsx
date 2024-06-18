'use client';
import React from 'react'
import {
  Box,
  Flex,
  Container,
  Text,
  Button,
  HStack,
  Stack,
  useColorMode,
  useDisclosure,
  useBreakpointValue,
  IconButton,
  Divider
} from '@chakra-ui/react';
import {  MoonIcon, SunIcon } from '@chakra-ui/icons';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import Link from 'next/link';

import { FaXTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa6';

import { motion } from 'framer-motion';

export default function Nav() {


  const isDesktop = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
    xl: true,
  });

  const { colorMode, toggleColorMode } = useColorMode();


  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container mt={2} maxW={'3xl'}>
    
       <Box 
        borderWidth={'5px'}
       bgGradient={[
        'linear(to-t, #4A5568, #A0AEC0)',
     
      ]}
      
        borderRadius={'md'}>
     <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
       
       <HStack spacing={8} alignItems={'center'}>
         <Box  p={2}>
         <IconButton
  bg='#1a202c '
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
           {isDesktop?   <Link href="/"><Text color={'white'}>Evan Gordon</Text></Link> : null} 
         </Box>
        
         <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
           <Link href="/blog"><Text color={'white'}>Blog</Text></Link>
           <Link href="/experience"><Text color={'white'}>Experience</Text></Link>
         </HStack>
       </HStack>
       <Stack direction={'row'} spacing={7} ml={7}>
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
           <a href='https://x.com/EvanGordon9343' rel="noreferrer"  target="_blank">  <FaXTwitter color={'white'} size={21} /></a>
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
           <a href='https://github.com/evangordo' rel="noreferrer"  target="_blank" > <FaGithub color={'white'}size={21} /></a> 
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
           <a href='https://www.linkedin.com/in/evan-gordo/'  rel="noreferrer"  target="_blank">  <FaLinkedinIn color={'white'} size={21} /></a>
           </Box>
         </motion.div>
<Box p={2}>
         <Button onClick={toggleColorMode}>
           {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
         </Button>
         </Box>
       </Stack>
     
     </Flex> 
     {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} p={2}spacing={4}>
            <Link href="/"><Text color={'white'}>Home</Text></Link>
            <Divider/>
            <Link href="/blog"><Text color={'white'}>Blog</Text></Link>
            <Divider/>
           <Link href="/experience"><Text color={'white'}>Experience</Text></Link>
           <Divider/>
            </Stack>
          </Box>
        ) : null}
     
  
      </Box>
    
  
    
    </Container>
  );
}
