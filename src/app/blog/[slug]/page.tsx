import { getPost, getPosts } from "../../lib/data";
import { Post } from "../../components/Post";
import { notFound } from "next/navigation";
import { Box, Container, Heading } from "@chakra-ui/react";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: {
  params: { slug: string } }) {

  const post = await getPost(params.slug);
  if (!post) return notFound();

  return (
    <>
    <Container mt={4} maxW={'3xl'}>
      <Heading mt={4}>{post.title}</Heading>
      <Box mt={4}>
      <Post >{post.body}</Post>
      </Box>
      </Container>
    </>
  
  );
}