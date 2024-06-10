import { readdir } from "fs/promises";

export interface Blog {
    slug: string;
    title: string;
    date: string;
    heading: string;
    description: string;
}

export async function getBlogs(): Promise<Blog[]> {
    const slugs = (
        await readdir("./src/app/content", { withFileTypes: true })
    ).filter((dirent) => dirent.isDirectory());

    const posts = await Promise.all(
        slugs.map(async ({ name }) => {
            const { metadata } = await import(`../content/${name}/page.mdx`);
            return { slug: name, ...metadata };
        })
    );

    posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

    return posts;
}
