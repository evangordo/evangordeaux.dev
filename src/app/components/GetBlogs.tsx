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
<BlogCard heading={blog.heading} description={blog.description} date={blog.date} />
</Link>
        </li>
    ))}
    </ol>
  ); 
}