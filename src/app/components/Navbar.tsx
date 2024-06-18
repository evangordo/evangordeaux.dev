'use client';

import {
  Box,
  Flex,
  Container,
  Text,
  Button,
  HStack,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Icon,
  Collapse,

} from '@chakra-ui/react';
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';

import { FaXTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa6';

import { motion } from 'framer-motion';
interface Props {
  children: React.ReactNode;
}


export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Container mt={2} maxW={'3xl'}>
       <Box>
       <Box 
        borderWidth={'5px'}
       bgGradient={[
        'linear(to-t, #4A5568, #A0AEC0)',
     
      ]}
      
        borderRadius={'md'}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
       
        <HStack spacing={8} alignItems={'center'}>
          <Box p={2}>
            <Link href="/"><Text color={'white'}>Evan Gordon</Text></Link>
          </Box>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Link href="/blog"><Text color={'white'}>Blog</Text></Link>
            <Link href="/experience"><Text color={'white'}>Experience</Text></Link>
          </HStack>
        </HStack>
        <Stack direction={'row'} spacing={7} ml={7}>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,

              borderRadius: '100%',
            }}
          >
            <Box
             p={2}
              borderRadius={'sm'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              bg={'black'}
              _hover={{
                bg: 'black',
              }}
              _focus={{
                bg: 'black',
              }}
              mt={2}
            >
            <a href='https://x.com/EvanGordon9343' target="_blank">  <FaXTwitter color={'white'} size={21} /></a>
            </Box>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,

              borderRadius: '100%',
            }}
          >
            <Box
             p={2}
              borderRadius={'sm'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              bg={'black'}
              _hover={{
                bg: 'black',
              }}
              _focus={{
                bg: 'black',
              }}
              mt={2}
            >
            <a href='https://github.com/evangordo' target="_blank" > <FaGithub color={'white'}size={21} /></a> 
            </Box>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3 }}
            whileTap={{
              scale: 0.8,

              borderRadius: '100%',
            }}
          >
            <Box
            p={2}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              bg={'blue.400'}
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              mt={2}
            >
            <a href='https://www.linkedin.com/in/evan-gordo/'  target="_blank">  <FaLinkedinIn color={'white'} size={21} /></a>
            </Box>
          </motion.div>
<Box p={2}>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          </Box>
        </Stack>
      
      </Flex>
  
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
      </Box>
    
    </Container>
  );
}
interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}



const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
    {NAV_ITEMS.map((navItem) => (
      <MobileNavItem key={navItem.label} {...navItem} />
    ))}
  </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}



const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Inspiration',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Find Work',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Learn Design',
    href: '#',
  },
  {
    label: 'Hire Designers',
    href: '#',
  },
]