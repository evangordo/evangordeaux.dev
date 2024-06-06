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
    <div>
      <Box m={3} className="animate-slide-left-infinite group-hover:animation-pause" display="inline-block" w="max-content">
        <Link href='https://react.dev/'>
          <Image className="mx-4 inline h-16" src={react}alt="react" width={158} height={18} />
        </Link>
        <Link href='https://react.dev/'>
          <Image className="mx-4 inline h-16" src={next} alt="next" width={158} height={18} />
        </Link>
        <Link href='https://react.dev/'>
          <Image className="mx-4 inline h-16" src={typescript} alt="typeScript" width={158} height={18} />
        </Link>
        <Link href='https://react.dev/'>
          <Image className="mx-4 inline h-16" src={chakra} alt="chakr" width={158} height={18} />
        </Link>
        <Link href='https://react.dev/'>
          <Image className="mx-4 inline h-16" src={mongo} alt="mongo" width={'100%'} height={20} />
        </Link>
      </Box>

      {/* <Box m={3} className="animate-slide-left-infinite group-hover:animation-pause" display="inline-block" w="max-content">
        <Link href='https://react.dev/'>
       
        </Link>
        <Link href='https://react.dev/'>
          <Image className="mx-4 inline h-16" src="/assets/next.png" alt="Next.js" width={158} height={48} />
        </Link>
        <Link href='https://react.dev/'>
          <Image className="mx-4 inline h-16" src="/assets/typescript.png" alt="TypeScript" width={158} height={48} />
        </Link>
        <Link href='https://react.dev/'>
          <Image className="mx-4 inline h-16" src="/assets/chakra.png" alt="Chakra UI" width={158} height={48} />
        </Link>
        <Link href='https://react.dev/'>
          <Image className="mx-4 inline h-16" src="/assets/prisma.png" alt="Prisma" width={158} height={48} />
        </Link>
      </Box> */}

      <TitleCard title="Experience" />
    </div>
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
    // ml={-6}
        m={2}
      >
     {title}
      </Box>
    </Box>
    </Box>
  )
}