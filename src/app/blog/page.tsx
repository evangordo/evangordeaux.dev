import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { GetAllBlogs } from '../components/GetBlogs';

export default function BlogPage() {


  return <div>
    <Container mt={4}maxW={'3xl'}>
<Heading>My blogs</Heading>
<SimpleGrid columns={[1,1,2]}>
<GetAllBlogs/>

</SimpleGrid>
    </Container>
  </div>;
}
