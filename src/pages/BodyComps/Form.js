import React from 'react';
import { useState } from 'react';
import { Icon, Link, Image, FormControl, FormLabel, Flex, Box, Text, Button, Input, Container, Hide, useColorModeValue, Wrap, WrapItem, Heading, VStack, HStack, IconButton, InputGroup, InputLeftElement, Textarea } from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import { MdSportsBaseball } from "react-icons/md";
import { GiBaseballGlove, GiBaseballBat } from "react-icons/gi"
import styles from '@/styles/Forms.module.css';
import AnswerModal from './AnswerModal.js';





export default function Form() {

  const [guess, setGuess] = useState("")
  console.log(guess)

  const answer = "evan longoria";
  const [answerKey, setAnswerKey] = useState(false);

  const [revealAvatar, setRevealAvatar] = useState(false)
  
  const checkAnswer = () => {
    
    let passed = "Correct";
    let failed = "Nope";
    if (guess.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase() === answer) {
      setRevealAvatar(true)
      console.log(passed)

    } else {
     console.log(failed)
    }
  }

  const playerID = '/images/assets/playID.png'
  const avatar = '/images/assets/avatar.png'
  const playerName = answer.toUpperCase()
  const factOne = '2008 Rookie of The Year';
  const factTwo = '3 Time All Star';
  const currentTeam = 'SF Giants'

  return (
    <>
    <Container bg={''} maxW="full" mt={4} mb={8} centerContent overflow="hidden">
      
        <Flex>
        
          {/* Second Blob Image */}
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'90%'}
            height={'90%'}>
            <Hide below='md'>
              <Blob
              w={'90%'}
              h={'150%'}
              position={'absolute'}
              top={'-15%'}
              left={10}
              zIndex={-1}
              opacity={'80%'}
              color={'orange.500'}
            />
            <Blob
              w={'80%'}
              h={'120%'}
              position={'absolute'}
              top={'-18%'}
              left={-10}
              zIndex={-1}
              
              color={'gray.800'}
            />
            
            {/* Unused attributes
              rounded={'2xl'}
              boxShadow={'2xl'} */}
          
            <Box
              position={'relative'}
              height={'full'}
              p={'100px'}
              mt={20}
              width={'full'}
              overflow={'hidden'}
              >

          {/* Conditionally render the player id  */}
            { !revealAvatar ? 
              <Image
                alt={'avatar-image'}
                fit={'fit'}
                align={'center'}
                w={'150%'}
                h={'150%'}
                src={avatar}
              />
              :
              
                <Box pt={2} borderRadius={'5px'} bg={'orange.600'} opacity={'85%'}>
                  <Image
                    alt={'player-image'}
                    fit={'fit'}
                    align={'center'}
                    w={'200%'}
                    h={'200%'}
                    src={playerID}
                  />
                    <Heading color={'whiteAlpha.900'} align={'center'} bg={'orange.700'} borderRadius={'5px'}>
                    {playerName}
                    </Heading>
                </Box>
             
            }
            </Box>
          
            </Hide>
          </Flex>
      
       {/* Contact form */}       
        <Box
          bg="gray.300"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 8 }}
          p={{ sm: 5, md: 5, lg: 14 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading textAlign={'center'}>Bonus Stats</Heading>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="center">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="gray.800"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdSportsBaseball color='white' size="20px" />}>
                        {factOne}
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="275px"
                        variant="ghost"
                        color="gray.800"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<GiBaseballGlove color='white' size="20px" />}>
                        {factTwo}
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="gray.800"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color='white' size="20px" />}>
                       {currentTeam}
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <Link href='https://github.com/cjbricks'>
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsGithub size="28px" />}
                    />
                    </Link>
                    <IconButton
                      aria-label="instagram"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg" mt={[0, 20]}>
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Player's Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md"
                          onChange={(e) => {
                            setGuess(e.target.value)
                          }} />
                        </InputGroup>
                      </FormControl>
                      
                     
                      <FormControl id="name" float="right">
                        <Box align={'center'}>
                          <Button
                            variant="solid"
                            bg={'gray.800'}
                            color="white"
                            _hover={{ bg: 'gray.300' }}
                            onClick={checkAnswer}>
                            Guess
                          </Button>
                        </Box>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
    </>
  )
}

export const Blob = (props, IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};