import React from 'react'
import { AspectRatio } from '@chakra-ui/react'

export default function Bot() {
  const botPress = 'https://mediafiles.botpress.cloud/6adda225-9751-4969-be00-30b5847e64f0/webchat/bot.html'
  return (
    <>
      <AspectRatio >
        <iframe
          src={botPress} />
      
      </AspectRatio>
  </>
  
  )
}
