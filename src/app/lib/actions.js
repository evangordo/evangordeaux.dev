import { revalidatePath } from "next/cache";
import { Blog } from "./models";
import { connectToDb } from "./utils";
// import { signIn, signOut } from "./auth";
// import bcrypt from "bcryptjs";

export const addBlog = async (prevState, formData) => {
  //   const { title, desc, slug } = Object.fromEntries(formData);
  const title = formData.get("title");
  const desc = formData.get("desc");
  const slug = formData.get("slug");

  try {
    connectToDb();
    const newBlog = new Blog({
      title,
      desc,
      slug,
    });
    console.log("newblog", newBlog);

    await newBlog.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
