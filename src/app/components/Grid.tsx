'use client'
import React from 'react'

import { Grid, GridItem, Container , Box, Text, Flex, Heading} from '@chakra-ui/react'
import Tools from './Tools'
// import Image from 'next/image'
import Image from './Image'
import rakeoff from '../assets/rakeoff.png'
import dcu from '../assets/dcu.png'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function GridBox() {
  return (
    <Container mt={4} maxW={'3xl'}>
    <Grid
    h='300px'
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(5, 1fr)'
    gap={4}
  >
    <GridItem  rowSpan={2} colSpan={1}  >
      <Box 
      borderWidth='5px'  borderRadius={'md'} height={'100%'}><Text>hi</Text>
      <TitleCard title='Education'/>
      </Box>
      </GridItem>
    <GridItem colSpan={2}  >
    <Box 
      borderWidth='5px' borderRadius={'md'} >
    <Box bg='#13324d' >
  <Heading color={'#fec802'}  p={2} fontSize={'lg'}> Dublin City University,</Heading>
  <Heading ml={2}fontSize={'lg'}> B.Sc. Computing for Business, 2019 - 2023,</Heading>
  <Heading p={2}fontSize={'lg'}> 1st class</Heading>

        <TitleCard title='Education'/>
        </Box>
        </Box>
</GridItem>
     
    <GridItem colSpan={2} >
    <Box 
      borderWidth='5px' borderRadius={'md'}>
 
<Image alt='work' objectFit='cover' src={rakeoff}/>
<TitleCard title='Experience' showExternalLinkIcon={true}/>

</Box>
      </GridItem>
    <GridItem colSpan={4} >
      <Tools/>
      </GridItem>
  </Grid>
  </Container>
  )
}



interface TitleCardProp{
  title: string
  showExternalLinkIcon?: boolean;
}

const TitleCard = ({title, showExternalLinkIcon = false }: TitleCardProp) => {
  return (
    <Box bg='#2c313d' >
    <Flex alignItems={'center'} justifyContent={'space-between'} >
   
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
      {showExternalLinkIcon && <ExternalLinkIcon m={2} />}
    </Flex>
    </Box>
  )
}



