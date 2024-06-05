import { Heading } from "@chakra-ui/react";
import About from "./components/About";
import BlogCard from "./components/BlogCard";
import { scroll } from "framer-motion/dom";


export default function Home() {

//   const progressWheel = document.querySelector(".progress");

// scroll((progress) => {
//   progressWheel.style.strokeDasharray = `${progress}, 1`;
// });
  return (
    <>
<About/>

<BlogCard/>
<BlogCard/>
<BlogCard/>
<BlogCard/>
<BlogCard/>
<BlogCard/>
</>
  );
}
