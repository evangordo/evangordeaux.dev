import { Blog } from "./models";
import { connectToDb } from "./utils";

export const getAllBlogs = async () => {
  try {
    connectToDb();
    const posts = await Blog.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch blogs");
  }
};

export const getBlog = async (slug: String) => {
  try {
    connectToDb();
    const post = await Blog.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch blog");
  }
};