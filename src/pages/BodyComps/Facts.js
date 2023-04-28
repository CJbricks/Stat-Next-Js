import React from 'react';
import styles from '@/styles/Forms.module.css';
import { Box, Flex, Text, Center } from '@chakra-ui/react';
import Image from 'next/image'




export default function Facts(props) {

  return (
    <>
    <Flex flexWrap="wrap" w="100%" border="1px solid red" m={10}>
      <Box flexWrap="wrap" w="100%" bg="blue.50" display="inline-flex">
        <Text
          fontSize={['1em', '1.2em', '2em']}
          fontWeight={600}>Teams:</Text>
            { props.teamLogos.map((logo) => (
                <Image
                key="logo"
                src={logo}
                width={80}
                height={80}
                alt="team-logo" />
            ))
            }
       
      </Box>
      <Box>
        <div>Statsheet</div>
      </Box>
      <Box>
        <div>Awards and etc</div>
      </Box>
        
       
      
      </Flex>
    </>
  )
}
