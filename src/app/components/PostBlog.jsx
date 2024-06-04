"use client";

import { addBlog } from "../../../lib/actions.js";

import { useFormState } from "react-dom";

const PostBlog = () => {
  const [state, formAction] = useFormState(addBlog, undefined);

  return (
    <form action={formAction}>
      <h1>Add New Post</h1>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea type="text" name="desc" placeholder="desc" rows={10} />
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default PostBlog;
