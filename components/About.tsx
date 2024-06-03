import {
    Avatar,
    Box,
    Container,
    Heading,
    Stack,
    Image,
    Flex
} from '@chakra-ui/react'


import React from 'react'

export default function About() {
  return (
 <Container mt={5}maxW={'3xl'} >
  <Stack>
    <Flex>

    <Image objectFit={'cover'} boxSize={24}rounded={"full"}src={'https://mentorsclub.s3.eu-north-1.amazonaws.com/f39272a4-1dca-4d3f-a482-67b9e11b771e-profiler.png'}/>
    <Heading ml={5} textAlign={'center'}fontSize={'xl'}>
        Hey, I'm Evan
    </Heading>
   
    </Flex>
  </Stack>

 </Container>
  )
}
