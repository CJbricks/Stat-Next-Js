import React from 'react'
import { Box, Flex, Stack, Text, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'


export default function LogoCard(props) {
  

  
  return (
    <>
     
            <Flex flex={1} 
            wrap={'wrap'} 
            align={'center'} 
            justify={'center'} 
            m={6} 
            p={8} 
            
            borderRadius={'50px'}>
              { props.logos.map((logo) => (

                  <Image 
                    key="logo"
                    src={logo}
                    width={200}
                    heigth={200}
                    alt="archived-image" 
                     />
              
                  ))
              }
            </Flex>
          
    </>
  )
}
