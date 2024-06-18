import  React from 'react'
import About from './components/About';

import GridBox from './components/Grid';
import Footer from './components/Footer';
import GetAllBlogs from './components/GetBlogs';




export default function Home() {


  return (
    <>
      <About />
      <GridBox />
      <GetAllBlogs/>
      <Footer />
    </>
  );
}
