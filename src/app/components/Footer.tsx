'use client';

import {
  Box,
  chakra,
  Container,
  Divider,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Flex
} from '@chakra-ui/react';

import { FaXTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa6';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <>
     
      <Container
        as={Stack}
        maxW={'3xl'}
        py={4}
      
        justify={{ base: 'center', md: 'space-between' }}
     
      >
        <Divider />
        {/* <Flex alignItems={'space-betweem'}> */}
        <Text>Evan Gordon</Text>
        <Stack direction={'row'} alignContent={'end'} spacing={7} >
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
       
        </Stack>
        {/* </Flex> */}
      </Container>
    </>
  );
}
