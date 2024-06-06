'use client'
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
import { ExternalLinkIcon } from '@chakra-ui/icons'




export default function BlogCard() {
  return (
    <Center py={6}>
      <Box
        maxW={'3xl'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        borderWidth={'5px'}
        >
   
     
   <Flex mb={1}  alignItems={'center'} justifyContent={'space-between'}>
                <Box >
          <Text
            color={'blue.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Blog
          </Text>
          </Box>
          <Box >
          <ExternalLinkIcon/>
          </Box>
          </Flex>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Boost your conversion rate
          </Heading>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </Text>
  
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
       
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
         
            <Text color={'gray.500'}>Feb 08, 2021 </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}