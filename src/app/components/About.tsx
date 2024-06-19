'use client';
import {
  Box,
  Container,
  Heading,
  Stack,
  
  Flex,
  Text,
  Kbd,
  useColorModeValue
} from '@chakra-ui/react';
import Image from './Image';

import profiler from '../assets/LinkedIn.png'
import React from 'react';


export default function About() {
  return (
    <Container mt={5} maxW={'3xl'}>
      <Box position={'relative'}>
      <Box zIndex="0" width={{base: '100%', md: "60%"}} position="absolute" height={{base: '35%', md: "40%"}}>
            <Box
              bgGradient={useColorModeValue(
                'radial(blue.600 1px, transparent 1px)',
                'radial(blue.300 1px, transparent 1px)',
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        <Stack>
          <Flex zIndex="1">
            <Image
           
         className='imgbg'
              objectFit={'cover'}
              boxSize={24}
              rounded={'full'}
              
              alt='profiler'
              src={
                profiler
              }
            />
            <Heading ml={5} mt={7} textAlign={'center'} fontSize={'xl'}>
              I&apos;m Evan, welcome to my site 👋
            </Heading>
          </Flex>
  
          <Text mt={4} fontSize={'xl'}>
            I&apos;m a frontend developer. My expertise lies in <Kbd borderColor={'blue.400'}>React</Kbd>{' '}
            and <Kbd borderColor={'white'}>Next.js</Kbd>.
          </Text>
          <Text mt={4} fontSize={'xl'}>
            Here to showcase my work, as well my learnings along the way in the hopes of
            helping others.
          </Text>
        </Stack>
   
      </Box>
    </Container>
  );
}
