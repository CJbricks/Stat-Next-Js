import React from 'react';
import styles from '@/styles/Forms.module.css';
import { Box, Flex, Text, Center, Image } from '@chakra-ui/react';



export default function Facts(props) {
  return (
    <>
    <Flex w="50%" border="1px solid red">
      <Box w="100%" bg="blue.50">
        <div>Teams played for:
          { props.teamArray.map((image) => (
            <Image
            key="image"
            src={image}
            width={30}
            height={60}
            />
          ))
          }
        </div>
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
