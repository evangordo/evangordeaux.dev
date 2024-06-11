'use client';
import {  Box, Tooltip } from '@chakra-ui/react';
import react from '../assets/react.png';
import typescript from '../assets/typescript.png';
import chakra from '../assets/chakra.png';
import mongo from '../assets/mongo.png';
import Image from './Image';


export default function Tools() {
  return (
    <Box  bgGradient={[
      'linear(to-t, #4A5568, #A0AEC0)',
      // 'linear(to-t, blue.200, teal.500)',
      // 'linear(to-b, #CBD5E0, RGBA(255, 255, 255, 0.24))',
    ]} boxShadow='dark-lg'  borderWidth="5px" borderRadius="lg">
      <ChakraImagesCarousel />
    </Box>
  );
}

const ChakraImagesCarousel = () => {
  return (
    <>
      <Box  className="logos group relative overflow-hidden whitespace-nowrap magicpattern ">
        <Box
          m={3}
          className="group-hover:animation-pause animate-slide-left-infinite"
          display="inline-block"
          w="100%"
         
        >
          <Tooltip label="React" aria-label='React'>
          <Image className="mx-6 inline h-20" h={16} w={14} src={react} alt="react" />
</Tooltip>
       
<Tooltip label="Typescript" aria-label='Typescript'>
          <Image className="mx-6 inline h-16" h={16} w={14} src={typescript} alt="typescript" />
          </Tooltip>

          <Tooltip label="Nextjs" aria-label='Nextjs'>
          <img
            className="mx-4 inline h-16"
            src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png"
            alt="nextjs"
          />
          </Tooltip>

          <Tooltip label="Vercel" aria-label='Vercel'>
          <img
            className="mx-4 inline h-16"
            src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
            alt="vercel"
          />
          </Tooltip>

          <Tooltip label="ChakraUI" aria-label='ChakraUI'>
          <Image className="mx-4 inline h-16" h={16} w={14} src={chakra} alt="chakraui" />
          </Tooltip>

          <Tooltip label="Mongodb" aria-label='Mongodb'>
          <Image className="mx-4 inline h-16" h={16} w={14} src={mongo} alt="mongodb" />
          </Tooltip>
        </Box>

        <Box
          className="group-hover:animation-pause animate-slide-left-infinite"
          display="inline-block"
          w="max-content"
        >
             <Tooltip label="React" aria-label='React'>
          <Image className="mx-6 inline h-20" h={16} w={14} src={react} alt="react" />
          </Tooltip>
          <Tooltip label="Typescript" aria-label='Typescript'>
          <Image className="mx-6 inline h-20" h={16} w={14} src={typescript} alt="typescript" />
          </Tooltip>
          <Tooltip label="Nextjs" aria-label='Nextjs'>
          <img
            className="mx-4 inline h-16"
            src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png"
            alt="nextjs"
          />
</Tooltip>
<Tooltip label=" Vercel" aria-label='Vercel'>
          <img
            className="mx-4 inline h-16"
            src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
            alt="vercel"
          />

</Tooltip>
<Tooltip label="ChakraUI" aria-label='ChakraUI'>
          <Image className="mx-4 inline h-16" h={16} w={14} src={chakra} alt="chakraui" />
          </Tooltip>

          <Tooltip label="Mongodb" aria-label='Mongodb'>
          <Image className="mx-4 inline h-16" h={16} w={14} src={mongo} alt="mongodb" />
          </Tooltip>
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
      <Box  bgGradient={[
        'linear(to-t, #4A5568, #A0AEC0)',
        // 'linear(to-t, blue.200, teal.500)',
        // 'linear(to-b, #CBD5E0, RGBA(255, 255, 255, 0.24))',
      ]} display="flex">
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
