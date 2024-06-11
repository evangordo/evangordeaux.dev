import { Container } from '@chakra-ui/react';
import React from 'react';


export default function Page({ params }: { params: { slug: string } }) {
  return <>
  <Container mt={4} maxW={'3xl'}>
  My Post: {params.slug}
  </Container>
  </>
} 