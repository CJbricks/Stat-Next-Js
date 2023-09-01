import { React, useRef, useEffect }from 'react'
import { Image, Box, Flex } from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'

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
              className={styles.fade}
              >
          <Image src={statSheet} alt="reed-shepard-unsplash-image" />
      </Box>
    </Flex>
            </>
  )
}
