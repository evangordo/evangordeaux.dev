import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

export type Blog = {
  title: string;
  slug: string;
  date: string;
  description: string;
  body: string;
};

export async function getBlogs() {
  const blogs = await fs.readdir("./content/");

  return Promise.all(
    blogs
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `./content/${file}`;
        const fileContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(fileContent);

        return { ...data, body: content } as Blog;
      })
  );
}

export async function getBlog(slug: string) {
  const blogs = await getBlogs();
  return blogs.find((blog) => blog.slug === slug);
}