import React from "react";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { getBlogs } from "../lib/data";
import BlogCard from "./BlogCard";

export default async function GetAllBlogs() {
  const blogs = await getBlogs();

  return (
    <div>
        <Container mt={{base: 0, md:4}}maxW={'3xl'}>
        <SimpleGrid gap={6} columns={[1,1,2]}>
      {blogs
        .sort((a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((blog) => (
          <article key={blog.slug}>
            <a href={`/blog/${blog.slug}`}>
                <BlogCard title= {blog.title} date= { blog.date} description={blog.description}/>
            </a>
          </article>
        ))}
        </SimpleGrid>
        </Container>
    </div>
    
  );
}
