'use client';
import React from 'react'
import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';


interface BlogCardProps{
  heading: string,
  description: string,
  date: string


}

export default function BlogCard({heading, description, date}: BlogCardProps) {
  return (
    <Center py={6}>
      <Box   boxShadow='dark-lg'
        rounded={'md'}
        borderWidth={'5px'}
        bgGradient={[
          'linear(to-t, #4A5568, #A0AEC0)',
         
        ]}
      >
      <Box
    bg='
    #1a202c'
    
        maxW={'3xl'}
        w={'full'}
       
       
      
        p={6}
        overflow={'hidden'}
      
      >
        <Flex mb={1}  alignItems={'center'} justifyContent={'space-between'}>
          <Box bg='
#1a202c'>
            <Text
              color={'blue.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              Blog
            </Text>
          </Box>
          <Box>
            <ExternalLinkIcon  color={'white'}/>
          </Box>
        </Flex>
        <Heading
          color={'white'}
          fontSize={'2xl'}
          fontFamily={'body'}
        >
        {heading}
        </Heading>
        <Text mt={2} mr={1} color={'gray.500'}>
  {description}
        </Text>

        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text color={'gray.500'}> {date} </Text>
          </Stack>
        </Stack>
      </Box>
      </Box> 
    </Center>
  );
}
