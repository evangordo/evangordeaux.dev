import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

import React from 'react'
import GetAllBlogs from "../components/GetBlogs";

export default function page() {
  return (
    <Container mt={4}maxW={'3xl'}>
<Heading mt={4}>All My Blogs</Heading>

<GetAllBlogs/>


    </Container>
  )
}
