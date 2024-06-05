import React from 'react'

import { Grid, GridItem, Container , Box, Text} from '@chakra-ui/react'
import Tools from './Tools'

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
      borderWidth='5px' borderRadius={'md'} height={'100%'}><Text>hi</Text></Box>
      </GridItem>
    <GridItem colSpan={2}  >
    <Box 
      borderWidth='5px' borderRadius={'md'} height={'100%'}/>
</GridItem>
     
    <GridItem colSpan={2} >
    <Box 
      borderWidth='5px' borderRadius={'md'} height={'100%'}/>
      </GridItem>
    <GridItem colSpan={4} >
      <Tools/>
      </GridItem>
  </Grid>
  </Container>
  )
}
