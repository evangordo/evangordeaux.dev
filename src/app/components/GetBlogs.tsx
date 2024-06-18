import { getPosts } from "../lib/data";
import BlogCard from "./BlogCard";

export default async function GetAllBlogs() {
  const posts = await getPosts();

  return (
    <div>
      {posts
        .sort((a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => (
          <article key={post.slug}>
            <a href={`/blog/${post.slug}`}>
                <BlogCard title= {post.title} date= {post.date} description={post.description}/>
            </a>
          </article>
        ))}
    </div>
  );
}
