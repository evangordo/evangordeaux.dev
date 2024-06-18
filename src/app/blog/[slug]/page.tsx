import { getPost, getPosts } from "../../lib/data";
import { Post } from "../../components/Post";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Heading } from "@chakra-ui/react";

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
      <Heading>{post.title}</Heading>
      <Post>{post.body}</Post>
      </Container>
    </>
  
  );
}