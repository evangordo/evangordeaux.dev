import { Container, Grid, Heading, SimpleGrid } from "@chakra-ui/react";
import About from "./components/About";
import BlogCard from "./components/BlogCard";
import { scroll } from "framer-motion/dom";
import Tools from "./components/Tools";
import GridBox from "./components/Grid";
import Footer from "./components/Footer";


export default function Home() {

//   const progressWheel = document.querySelector(".progress");

// scroll((progress) => {
//   progressWheel.style.strokeDasharray = `${progress}, 1`;
// });
  return (
    <>
<About/>
{/* <Tools/> */}
<GridBox/>
<Container mt={16} maxW={'3xl'}>
<SimpleGrid gap={4} columns={[1,1,2]}>
<BlogCard/>
<BlogCard/>
<BlogCard/>
<BlogCard/>
</SimpleGrid>
</Container>
<Footer/>

</>
  );
}
