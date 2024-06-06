'use client'
import { Container, Heading, Box , Text} from '@chakra-ui/react'
// 
import react from '../assets/react.png'
import next from '../assets/next.svg'
import typescript from '../assets/typescript.png'
import chakra from '../assets/chakra.png'
import mongo from '../assets/mongo.png'
import tailwind from '../assets/tailwindsvg.svg'
import prisma from '../assets/prisma.png'
import {motion} from 'framer-motion'

import Image from './Image'
import Link from 'next/link'




export default function Tools() {
  return (
 

      
        <Box  borderWidth='5px' borderRadius='lg'  >
        < ChakraImagesCarousel/>
        </Box>
  

 
  )
}


const ChakraImagesCarousel = () => {
  return (
<>
<Box
bg='#b2b2b2'

      className="logos group relative overflow-hidden whitespace-nowrap py-10"
    >
      <Box    m={3}className="animate-slide-left-infinite group-hover:animation-pause" display="inline-block" w="max-content">


      <Image className="mx-4 inline h-16"  h={16} w={14} src={react} alt="Reform" />
    
      <Image className="mx-4 inline h-16"  h={16} w={14} src={typescript} alt="Reform" />
       
        
         <img className="mx-4 inline h-16" src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" alt="SavvyCal" />
      
       
          <img className="mx-4 inline h-16" src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" alt="SavvyCal" />
       
        
          <Image className="mx-4 inline h-16"   h={16} w={14} src={chakra} alt="SavvyCal" />
       
          <Image className="mx-4 inline h-16"  h={16} w={14} src={mongo} alt="Reform" />

      </Box>

      <Box className="animate-slide-left-infinite group-hover:animation-pause" display="inline-block" w="max-content">
    
      <Image className="mx-4 inline h-16" h={16} w={14} src={react} alt="Reform" />
      <Image className="mx-4 inline h-16"   h={16} w={14} src={typescript} alt="Reform" />
    
        
        
    
           <img className="mx-4 inline h-16"  src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" alt="SavvyCal" />
        
         
           <img className="mx-4 inline h-16" src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" alt="SavvyCal" />
        
         
          <Image className="mx-4 inline h-16"  h={16} w={14} src={chakra} alt="SavvyCal" />
       
          <Image className="mx-4 inline h-16"  h={16} w={14} src={mongo} alt="Reform" />
      </Box>
      <TitleCard title="Stack I use" />
    </Box>
    </>
 
  );
};



interface TitleCardProp{
  title: string
}

const TitleCard = ({title}: TitleCardProp) => {
  return (
    <Box bg='#2c313d' mb='-10'>
    <Box  bg='#2c313d'display='flex' >
   
      <Box
      bg='#2c313d'
     
      style={{
        textShadow:
          " 20px grey, 0 0 30px grey, 0 0 40px grey, 0 0 55px grey, 0 0 75px grey",
      }}
        fontWeight='semibold'
        letterSpacing='wide'
        fontSize='xs'
        textTransform='uppercase'
 
        m={2}
      >
     {title}
      </Box>
    </Box>
    </Box>
  )
}