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
      <Box
      boxShadow='dark-lg' 
        maxW={'3xl'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
       
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        borderWidth={'5px'}
      >
        <Flex mb={1} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
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
            <ExternalLinkIcon />
          </Box>
        </Flex>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}
        >
        {heading}
        </Heading>
        <Text mr={1} color={'gray.500'}>
  {description}
        </Text>

        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text color={'gray.500'}> {date} </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
