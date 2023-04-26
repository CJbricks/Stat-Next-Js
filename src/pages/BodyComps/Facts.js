import React from 'react';
import styles from '@/styles/Forms.module.css';
import { Box, Flex, Text, Center, Image } from '@chakra-ui/react';



export default function Facts(props) {

  return (
    <>
    <Flex w="70%" border="1px solid red">
      <Box w="100%" bg="blue.50">
        <Text>Teams played for:</Text>
          { props.teamLogos.map((image) => (
            <Image
            key="image"
            src={image}
            width={30}
            height={60}
            />
          ))
          }
       
      </Box>
      <Box>
        <div>Best seasons played</div>
      </Box>
      <Box>
        <div>Awards and facts</div>
      </Box>
        
       
      
      </Flex>
    </>
  )
}
