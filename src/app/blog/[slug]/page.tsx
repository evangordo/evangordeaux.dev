import React from "react";
import { getBlog, getBlogs } from "../../lib/data";
import { Post } from "../../components/Post";
import { notFound } from "next/navigation";
import { Box, Container, Heading } from "@chakra-ui/react";

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return  blogs.map(( blog) => ({ slug: blog.slug }));
}

export default async function Page({ params }: {
  params: { slug: string } }) {

  const blog = await getBlog(params.slug);
  if (!blog) return notFound();

  return (
    <>
    <Container mt={4} maxW={'3xl'}>
      <Heading mt={4}>{blog.title}</Heading>
      <Box mt={4}>
      <Post >{blog.body}</Post>
      </Box>
      </Container>
    </>
  
  );
}