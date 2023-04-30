import React from 'react';
import { useState } from 'react';
import { FormControl, FormLabel, Flex, Box, Text, Button, Input } from '@chakra-ui/react';
import styles from '@/styles/Forms.module.css';
import AnswerModal from './AnswerModal.js';





export default function Form() {

  const [guess, setGuess] = useState("")
  console.log(guess)

  const answer = "ian kinsler";
  const [answerKey, setAnswerKey] = useState(false);
  const cardInfo = "Ian Michael Kinsler (born June 22, 1982) is an American-Israeli former professional baseball second baseman. He played in Major League Baseball (MLB) for 14 seasons for the Texas Rangers, Detroit Tigers, Los Angeles Angels, Boston Red Sox, and San Diego Padres. Kinsler was a four-time All Star, two-time Gold Glove winner, and a member of the 2018 World Series champion Boston Red Sox."

  const checkAnswer = () => {
    let answerFilter = guess.toLowerCase();
    let passed = "Correct";
    let failed = "Nope";
    if (answerFilter.replace(/[^a-zA-Z0-9 ]/g, '') === answer) {
      setAnswerKey(true)
      console.log(passed)

    } else {
     console.log(failed)
    }
  }

  return (
    <>
    <Flex w="100%" ml={['20%', '40%', '60%']}>
      <Box>
        <FormControl>
          <FormLabel>Who Is It?</FormLabel>
          <Input
           type="text"
           size="md"
           onChange={(e) => setGuess(e.target.value)}
           id="guess"
           placeholder="First Name, Last Name" />
          <Button
          variant="outline"
          colorScheme="red"
          onClick={checkAnswer}>Submit Guess</Button>
        </FormControl>
      </Box>
      <Box m={10}>
        { answerKey === true ? <AnswerModal answer={answer} cardInfo={cardInfo} /> : null }
      </Box>
    </Flex>
    </>
  )
}
