import React from 'react';
import { useState } from 'react';
import { FormControl, FormLabel, Flex, Box, Text, Button, Input } from '@chakra-ui/react';
import styles from '@/styles/Forms.module.css';





export default function Form() {

  const [guess, setGuess] = useState("")
  console.log(guess)

  const [answer, setAnswer] = useState("nolan ryan");
  const [answerKey, setAnswerKey] = useState(false);

  const checkAnswer = () => {
    let answerFilter = guess.toLowerCase();
    let passed = "Correct";
    let failed = "Nope";
    if (answerFilter.replace(/[^a-zA-Z0-9 ]/g, '') === answer) {
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
    </Flex>
    </>
  )
}
