import React from 'react';
import { Container } from '@chakra-ui/react';
import PostBlog from '../components/PostBlog';

export default function Admin() {
  return (
    <Container maxW={'2xl'}>
      <PostBlog />
    </Container>
  );
}
