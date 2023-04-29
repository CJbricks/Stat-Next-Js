import React from 'react';
import styles from '@/styles/Forms.module.css';
import { Box, Flex, Text, Center } from '@chakra-ui/react';
import Image from 'next/image'
import sheet from '/public/images/sheet.png'




export default function Facts(props) {

  return (
    <>
    <Flex flexWrap="wrap" w="100%" border="1px solid red"
          mt={10} mb={10} >
      
        <Box flexWrap="wrap" w="100%" bg="teal.500" display="inline-flex"
              alignItems="center" justifyContent="center" >
          
                { props.teamLogos.map((logo) => (
                    <Image
                    key="logo"
                    src={logo}
                    width={50}
                    height={50}
                    alt="team-logo" />
                ))
                }
          
        
        </Box>
       
        <Box pl={[0, 15, 40]} alignitems="center" justifyContent="center">
          <div className={styles.statsheet}>
            <Image 
            src={sheet}
            width={1000}
            height={200}
            alt="stat-sheet" />
          </div>
        </Box>
      
      <Box>
        <Text
          fontWeight={600}
          color="red.600"
          fontSize={['1em', '2em', '3em']}
          textAlign="center"
        >All Star Team 2008, 2010, 2012, and 2014!</Text>
      </Box>
        
       
      
      </Flex>
    </>
  )
}
