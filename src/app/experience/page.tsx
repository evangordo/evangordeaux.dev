import { Box, Container, Divider, Flex, Heading,Text,
  
  ListItem,

  UnorderedList,
} from '@chakra-ui/react'
import React from 'react'

export default function page() {
  return (
    <>
        <Container maxW={'3xl'}>
<Box
mt={8}
boxShadow='dark-lg'
borderWidth="5px" 
borderRadius={'md'}
bgGradient={[
  'linear(to-t, #4A5568, #A0AEC0)',
]}
>
<Box 
 bg='
 #1a202c'
 

 >
  
  <Heading color={'white'}
  m={2}> Experience</Heading>
<Divider/>
<Flex justifyContent={'space-between'}>
<Heading m={2}fontSize={'2xl'} color={'white'}> Rakeoff labs</Heading>
<Text m={2} color={'white'}>May '23 - April '24</Text>
</Flex>
<Text ml={2} color={'white'}>Co-founder & Frontend developer</Text>

<Text m={2} mt={4} color={'white'}>Rakeoff, was a web3 app built on the ICP blockchain in which recieved a $25k developers grant for. This was my first introduction into software development in production. I learned a lot about coding best practices using React, UI/UX design principles, and how to market users towards our product. It was a great entrepreneurial experience building this startup for the year alongside my fellow classmate.
</Text>
<UnorderedList p={1} >
  <ListItem color={'white'}>Built the landing page using React, Framer Motion and Styled with Chakra UI.</ListItem>
  <ListItem color={'white'}>Built the analytics page using React, Recharts, Context API for state managment, and styled with Chakra.</ListItem>
  <ListItem color={'white'}>Authored comprehensive documentation on GitBook.</ListItem>

</UnorderedList>
 </Box>
 </Box>
        </Container>

    </>
  ) 
}
