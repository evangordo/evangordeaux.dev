'use client';
import React from 'react';

import { Grid, GridItem, Container, Box, Text, Flex, Heading } from '@chakra-ui/react';
import Tools from './Tools';
// import Image from 'next/image'
import Image from './Image';
import rakeoff from '../assets/rakeoff.png';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function GridBox() {
  return (
    <Container mt={4} maxW={'3xl'}>
      <Grid h="300px" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem  rowSpan={2} colSpan={1}>
          <Box borderWidth="5px"  borderRadius={'md'} height={'100%'}>
            <Box bg='#f5f5ee'>
            <Text color={'black'} p={1}>I try to improve everyday, with views on things from a beginner's perspective. Outside of development, I'm passionate about fitness. 🏃‍♂️</Text>
            <TitleCard title="More" />
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box borderWidth="5px" borderRadius={'md'}>
            <Box bg="#13324d">
              <Heading color={'#fec802'} p={2} fontSize={'lg'}>
                {' '}
                Dublin City University,
              </Heading>
              <Heading ml={2} fontSize={'lg'}>
                {' '}
                B.Sc. Computing for Business, 2019 - 2023,
              </Heading>
              <Heading p={2} fontSize={'lg'}>
                {' '}
                1st class
              </Heading>

              <TitleCard title="Education" />
            </Box>
          </Box>
        </GridItem>

        <GridItem colSpan={2}>
          <Box borderWidth="5px" borderRadius={'md'}>
            <Image alt="work" objectFit="cover" src={rakeoff} />
            <TitleCard title="Experience" showExternalLinkIcon={true} />
          </Box>
        </GridItem>
        <GridItem colSpan={4}>
          <Tools />
        </GridItem>
      </Grid>
    </Container>
  );
}

interface TitleCardProp {
  title: string;
  showExternalLinkIcon?: boolean;
}

const TitleCard = ({ title, showExternalLinkIcon = false }: TitleCardProp) => {
  return (
    <Box bg="#3f444e">
      <Flex alignItems={'center'} justifyContent={'space-between'}>
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
        {showExternalLinkIcon && <ExternalLinkIcon m={2} />}
      </Flex>
    </Box>
  );
};
