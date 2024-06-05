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
 

      
        <Box mt={4} borderWidth='5px' borderRadius='lg'  >
        < ChakraImagesCarousel/>
        </Box>
  

 
  )
}



const ChakraImagesCarousel = () => {
  return (
    <Box
      className="logos group relative overflow-hidden whitespace-nowrap py-10"
      style={{ maskImage: 'linear-gradient(to right, transparent 0, white 128px, white calc(100% - 128px), transparent 100%)' }}
    >
     
       
      <Box className="animate-slide-left-infinite group-hover:animation-pause" display="inline-block" w="max-content">
     
<Link href='/https://react.dev/'>
      <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
      </Link>
      <Link href='/https://react.dev/'>
          <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
          </Link>
          <Link href='/https://react.dev/'>
         <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" />
         </Link>
         <Link href='/https://react.dev/'>
          <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="SavvyCal" />
          </Link>
          <Link href='/https://react.dev/'>
          <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg" alt="SavvyCal" />
          </Link>
      </Box>

      <Box className="animate-slide-left-infinite group-hover:animation-pause" display="inline-block" w="max-content">
      <Link href='/https://react.dev/'>
      <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" />
      </Link>
      <Link href='/https://react.dev/'>
           <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" />
           </Link>
           <Link href='/https://react.dev/'>
           <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" />
           </Link>
           <Link href='/https://react.dev/'>
           <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="SavvyCal" />
           </Link>
           <Link href='/https://react.dev/'>
          <img className="mx-4 inline h-16" src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg" alt="SavvyCal" />
          </Link>
      </Box>
    </Box>
  );
};
