'use server';
import React from 'react';
import { getBlog, getBlogs } from '../../lib/data';
import { Post } from '../../components/Post';
import { notFound } from 'next/navigation';
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Breadcrumb,
  BreadcrumbLink,
} from '@chakra-ui/react';

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);
  if (!blog) return notFound();

  return (
    <>
      <Container mt={4} maxW={'3xl'}>
        <Breadcrumb>
          <BreadcrumbLink href="/"> Home</BreadcrumbLink>
        </Breadcrumb>
        <Flex justifyContent={'space-between'}>
          <Heading fontSize={'5xl'} mt={4}>
            {blog.title}
          </Heading>
          <Text fontSize={'xl'} color={'grey'} m={8}>
            {blog.date}
          </Text>
        </Flex>
        <Box mt={4}>
          <Post>{blog.body}</Post>
        </Box>
      </Container>
    </>
  );
}
