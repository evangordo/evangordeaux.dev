'use client';
import {  Box, Tooltip } from '@chakra-ui/react';
import react from '../assets/react.png';
import typescript from '../assets/typescript.png';
import chakra from '../assets/chakra.png';
import mongo from '../assets/mongo.png';
import Image from './Image';


export default function Tools() {
  return (
    <Box borderWidth="5px" borderRadius="lg">
      <ChakraImagesCarousel />
    </Box>
  );
}

const ChakraImagesCarousel = () => {
  return (
    <>
      <Box bgGradient='linear(to-l, #464768, #b2b2b2)' className="logos group relative overflow-hidden whitespace-nowrap ">
        <Box
          m={3}
          className="group-hover:animation-pause animate-slide-left-infinite"
          display="inline-block"
          w="100%"
         
        >
          <Tooltip label="React" aria-label='React'>
          <Image className="mx-6 inline h-20" h={16} w={14} src={react} alt="react" />
</Tooltip>
       

          <Image className="mx-6 inline h-16" h={16} w={14} src={typescript} alt="typescript" />
          <Tooltip label="React" aria-label='React'>
          <img
            className="mx-4 inline h-16"
            src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png"
            alt="nextjs"
          />
          </Tooltip>

          <img
            className="mx-4 inline h-16"
            src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
            alt="vercel"
          />

          <Image className="mx-4 inline h-16" h={16} w={14} src={chakra} alt="chakraui" />

          <Image className="mx-4 inline h-16" h={16} w={14} src={mongo} alt="mongodb" />
        </Box>

        <Box
          className="group-hover:animation-pause animate-slide-left-infinite"
          display="inline-block"
          w="max-content"
        >
             <Tooltip label="React" aria-label='React'>
          <Image className="mx-6 inline h-20" h={16} w={14} src={react} alt="react" />
          </Tooltip>
          <Image className="mx-6 inline h-20" h={16} w={14} src={typescript} alt="typescript" />
          <Tooltip label="React" aria-label='React'>
          <img
            className="mx-4 inline h-16"
            src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png"
            alt="nextjs"
          />
</Tooltip>
          <img
            className="mx-4 inline h-16"
            src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
            alt="vercel"
          />

          <Image className="mx-4 inline h-16" h={16} w={14} src={chakra} alt="chakraui" />

          <Image className="mx-4 inline h-16" h={16} w={14} src={mongo} alt="mongodb" />
        </Box>
        <TitleCard title="Stack I use" />
      </Box>
    </>
  );
};

interface TitleCardProp {
  title: string;
}

const TitleCard = ({ title }: TitleCardProp) => {
  return (
    <Box bg="#3f444e" >
      <Box bg="#3f444e" display="flex">
        <Box
       
         color={'white'}
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          m={2}
        >
          {title}
        </Box>
      </Box>
    </Box>
  );
};
