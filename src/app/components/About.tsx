'use client';
import {
  Avatar,
  Box,
  Container,
  Heading,
  Stack,
  Image,
  Flex,
  Text,
  Kbd,
  IconProps,
  Icon,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';

import React from 'react';
// const Blur = (props: IconProps) => {
//     return (
//       <Icon
//         width={useBreakpointValue({ base: '100%', md: '40vw', lg: '40vw' })}
//         zIndex={useBreakpointValue({ base: -1, md: -1, lg: -1 })}
//         height={{ base: '560px', lg: '400px' }}
//         viewBox="0 0 528 560"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         {...props}>
//         <circle cx="1" cy="61" r="111" fill="#00BFFF" />
//         <circle cx="1" cy="106" r="139" fill="#778899" />
//         <circle cy="1" r="3" fill="#778899" />
//         <circle cx="1.5" cy="189.5" r="101.5" fill="#778899" />

//         <circle cx="70.5" cy="458.5" r="101.5" fill="#708090" />
//         <circle cx="426.5" cy="-0.5" r="101.5" fill="#778899" />
//       </Icon>
//     )
//   }

export default function About() {
  return (
    <Container mt={5} maxW={'3xl'}>
      <Box position={'relative'}>
        <Stack>
          <Flex>
            <Image
              objectFit={'cover'}
              boxSize={24}
              rounded={'full'}
              src={
                'https://mentorsclub.s3.eu-north-1.amazonaws.com/f39272a4-1dca-4d3f-a482-67b9e11b771e-profiler.png'
              }
            />
            <Heading ml={5} mt={7} textAlign={'center'} fontSize={'xl'}>
              I'm Evan, and welcome to my site
            </Heading>
          </Flex>
  
          <Text mt={4} fontSize={'xl'}>
            I'm a frontend developer. My expertise lies in <Kbd borderColor={'blue.400'}>React</Kbd>{' '}
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
