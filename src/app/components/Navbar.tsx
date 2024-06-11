'use client';

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
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { FaXTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa6';

import { motion } from 'framer-motion';
interface Props {
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { children } = props;

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
      href={'#'}
    >
      {children}
    </Box>
  );
};

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

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
          <Box p={2}>
            <Link href="/"><Text color={'white'}>Evan Gordon</Text></Link>
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
              <FaXTwitter color={'white'} size={21} />
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
              <FaGithub color={'white'}size={21} />
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
              <FaLinkedinIn color={'white'} size={21} />
            </Box>
          </motion.div>
<Box p={2}>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          </Box>
        </Stack>
    
      </Flex>
      </Box>
    </Container>
  );
}
