import {React, ReactNode} from 'react'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi'


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.900')} p={4} mt={2}>
        <Flex h={16} alignItems={'center'} justifyContent={'center'}>
          <IconButton
            size={'lg'}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            bg={useColorModeValue('gray.200', 'gray.200')}
            color={useColorModeValue('alphaBlack.900', 'alphaBlack.900')}
                _hover={{
                  bg: 'orange.300',
                }}
            onClick={isOpen ? onClose : onOpen} >
              <BiMenu size='full' /> 
              </IconButton>
          <HStack spacing={8} alignItems={'center'}>
            <Box p={[0, 0, 4]}>
              <Image 
                src='/images/sizedlogo.png' 
                alt='navbar-logo-sm'
                width={20}
                height={20}
                />
            </Box>
            {/* Navbar not menu */}
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              fontSize={['md', 'lg', 'xl']}
              fontWeight={500}>
              
                <Link 
                    href='/Body'
                    px={2}
                    py={1}
                    rounded={'full'}
                    _hover={{
                   textDecoration: 'none',
                   bg: useColorModeValue('orange.600', 'orange.600'),
                 }}>Home</Link>
              <Link 
              href='/Rules'
               px={2}
               py={1}
               rounded={'full'}
               _hover={{
                 textDecoration: 'none',
                 bg: useColorModeValue('orange.600', 'orange.600'),
               }}>Rules</Link>
              <Link 
                href='/Bot'
                px={2}
                py={1}
                rounded={'full'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('orange.600', 'orange.600'),
                }}>Ref Bot</Link>
                 <Link 
                href='/Contact'
                px={2}
                py={1}
                rounded={'full'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('orange.600', 'orange.600'),
                }}>Contact</Link>
                
                
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
           
            {/* Unused Link buttons link 
              <Link href='#' target='_blank'>
                <Button
                  variant={'outline'}
                  colorScheme={'red'}
                  size={'sm'}
                  mr={4}
                  _hover={{ bg: 'red.200', color: 'white' }}
                  >
                  Quote
                </Button>
              </Link>
              <Link href='#' target='_blank'>
                <Button
                  variant={'outline'}
                  colorScheme={'red'}
                  size={'sm'}
                  mr={4}
                  _hover={{ bg: 'red.200', color: 'white' }}
                  >
                  Contact Us
                </Button>
              </Link>
              */}
          </Flex>
        </Flex>

                {/* Drop menu */}
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <Link 
                    href='/Body'
                    px={2}
                    py={1}
                    rounded={'full'}
                    _hover={{
                   textDecoration: 'none',
              
                   bg: useColorModeValue('gray.500', 'gray.500'),
                 }}>Home</Link>

            <Link 
                    href='#'
                    px={2}
                    py={1}
                    rounded={'full'}
                    _hover={{
                   textDecoration: 'none',
                   
                   bg: useColorModeValue('gray.500', 'gray.500'),
                 }}>Contact</Link>
            <Link 
              href='#'
               px={2}
               py={1}
               rounded={'full'}
               _hover={{
                 textDecoration: 'none',
                 bg: useColorModeValue('gray.500', 'gray.500'),
               }}>Services</Link>
              <Link 
                href='#'
                px={2}
                py={1}
                rounded={'full'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.500', 'gray.500'),
                }}>Gallery</Link>
            
                
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}></Box>
    </>
  );
}