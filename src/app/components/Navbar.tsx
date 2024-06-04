'use client'

import {
  Box,
  Flex,
 Container,
  Text,
  Button,
  HStack,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Nav() {
    const Links = ['Dashboard', 'Projects', 'Team']
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container mt={2} maxW={'2xl'}>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      
          <HStack spacing={8} alignItems={'center'}>
            <Box><Link href='/'>Evan Gordon</Link></Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Link href='blog'>
                Blog
            </Link>
            <Link href='blog'>
                About
            </Link>
            </HStack>
          </HStack>
        <Stack direction={'row'} spacing={7} ml={7}>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>

    </Container>
  );
}