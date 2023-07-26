import React from 'react'
import { Image, Box, Flex } from '@chakra-ui/react'

export default function Sheet() {
  const statSheet = '/images/assets/sheet.png'
  return (
    <>
    <Flex flex={1} align={'center'} justify={'center'}>
      <Box
              height={'100%'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              m={8}
              >
          <Image src={statSheet} alt="reed-shepard-unsplash-image" />
      </Box>
    </Flex>
            </>
  )
}
