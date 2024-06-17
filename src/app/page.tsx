import { Container, Grid, Heading, SimpleGrid } from '@chakra-ui/react';
import About from './components/About';

import GridBox from './components/Grid';
import Footer from './components/Footer';

import { GetAllBlogs } from './components/GetBlogs';


export default function Home() {


  return (
    <>
      <About />
      <GridBox />
      <Container mt={4} maxW={'3xl'}>
        {/* <SimpleGrid gap={4} columns={[1, 1, 2]}>


      
         <GetAllBlogs/>
        </SimpleGrid> */}
      
      </Container>
      <Footer />
    </>
  );
}
