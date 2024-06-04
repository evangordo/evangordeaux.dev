import { revalidatePath } from "next/cache";
import { Blog } from "./models";
import { connectToDb } from "./utils.js";

// interface FormDataProps {
//   title: string;
//   desc: string;
//   slug: string;
// }

export const addBlog = async (prevState, formData) => {
  const { title, desc, slug } = Object.fromEntries(formData);

  try {
    await connectToDb();
    const newBlog = new Blog({
      title,
      desc,
      slug,
    });

    await newBlog.save();
    console.log("saved to db");
    revalidatePath("/blog");
    return undefined;
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
