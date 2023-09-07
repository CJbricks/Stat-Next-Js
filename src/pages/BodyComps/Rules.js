import React from 'react'
'use client'
import Link from 'next/link'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Highlight
} from '@chakra-ui/react'
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc'
import NavBar from '../HeaderComps/Navbar.js'
import Footer from './Footer.js'

const CardProps = {
  heading: "",
  description: "",
  icon: "",
  href: ""
}

const Card = ({ heading, description, icon, href }, CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    </Box>
  )
}

export default function Rules() {
  return (
    <>
    <NavBar />
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          A quick introduction to Stat Sheet.
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          <Highlight query={'LOVE BASEBALL'} styles={{}}>
          The story behind this game is short and sweet. My wife and I love Jomboy media and we LOVE BASEBALL. I created this game to 
          </Highlight>
          pass some time and improve my Javascript skills and so my wife could play our own version of RefGuess in our free time. The Og game is basic HTML/CSS/JS and can be found <Link href={'https://stat-tay.surge.sh'}>Here.</Link>
         
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12} mb={8}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Rules'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={'The rules are simple, you have one guess to nail the first and last name of the player without googling the stats directly. You can even use the bot to ask non-specific questions (bot is in beta)'}
            href={'#'}
          />
          <Card
            heading={'Tips'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={'Greatly appreciated you can donate in the footer or with your brave browser if you like the game that much.'}
            href={'#'}
          />
          <Card
            heading={'Links and Sources'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={'This game was made for my wife because we enjoy two thing Jomboy media and Baseball-Reference. Click below to visit either site and show them some love.'}
            href={'https://baseball-reference.com/'}
          />
          <Card
            heading={'Follow and Collaborate'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={'Have an idea for a player or to improve the overall experience of the game? Click below and email me or follow the github and fork your own version.'}
            href={'#'}
          />
          <Card
            heading={'Jomboy'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={'This is not my idea, this idea came from the Jomboy media series RefGuess. Again, follow them and show them some love with a follow.'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
    <Footer />
    </>
  )
}