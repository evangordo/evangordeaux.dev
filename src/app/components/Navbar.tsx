'use client'

import {
  Box,
  Flex,
 Container,
  Text,
  Button,
  HStack,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";

import {motion} from 'framer-motion'
interface Props {

  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Nav() {
    const Links = ['Dashboard', 'Projects', 'Team']
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container mt={2} maxW={'3xl'}>
    <Flex h={16} alignItems={'center'}  justifyContent={'space-between'}>
      
          <HStack spacing={8} alignItems={'center'}>
            <Box><Link href='/'>Evan Gordon</Link></Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Link href='blog'>
                Blog
            </Link>
            <Link href='blog'>
                About
            </Link>
            </HStack>
          </HStack>
        <Stack direction={'row'} spacing={7} ml={7}>
        <motion.div
  whileHover={{ scale: 1.2}}
  whileTap={{
    scale: 0.8,
   
    borderRadius: "100%"
  }}
>
          <Box 
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
          mt={2}>
       < FaXTwitter size={21}/>
    
       </Box>
       </motion.div>
       <motion.div
  whileHover={{ scale: 1.2}}
  whileTap={{
    scale: 0.8,
   
    borderRadius: "100%"
  }}
>
       <Box
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
    
     
       
       mt={2}>
       < FaGithub  size={21} />
       </Box>
       </motion.div>
       <motion.div
  whileHover={{ scale: 1.3}}
  whileTap={{
    scale: 0.8,
   
    borderRadius: "100%"
  }}
>
       <Box
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
      
      
       mt={2}>
        
       <FaLinkedinIn  size={21}/>
       </Box>
       </motion.div>
     
          <Button  onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>

    </Container>
  );
}