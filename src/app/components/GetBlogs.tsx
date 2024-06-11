import { getBlogs, type Blog } from "../lib/data";
import Link from "next/link";
import BlogCard from "./BlogCard";

export async function GetAllBlogs( ) {

const blogs = await getBlogs()
  return (
    <ol>
     {blogs.map(blog => (
        <li key={blog.slug}>
            <Link href={`/${blog.slug}`}>
<BlogCard heading={blog.title} description={blog.description} date={new Date(blog.date).toLocaleDateString()} />
</Link>
        </li>
    ))}
    </ol>
  ); 
}