import React from 'react';
import Image from 'next/image';
import playerCard from '/public/logos/player-card.png';
import { isOpen, onOpen, onClose,Flex, Box, Text, Button,  Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, } from '@chakra-ui/react'; 

export default function AnswerModal(props) {
  return (
    <>
        <Button variant="outline" colorScheme="green" onClick={onOpen} >Answer!</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{props.answer}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Image  
                                src={playerCard}
                                alt="player-image"
                                width={100}
                                height={100} />
                        </ModalBody>
                        <ModalFooter>
                            <Text>{props.cardInfo}</Text>
                        </ModalFooter>
                    </ModalContent>
            </Modal>
    </>
  )
}
