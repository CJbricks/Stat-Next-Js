import { React, useState } from 'react';
import axios from 'axios'
import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import { BiMailSend } from 'react-icons/bi';
import { FaInstagram, FaTwitter, FaYoutube, FaGoogle, FaLaptop, FaGithub, FaFlickr } from 'react-icons/fa';

const Logo = (props, any) => {
  return (
    <Image 
    src='/images/bbb-head-logo.png'
    alt='bricks-logo-small'
    width={40}
    height={40}
    />
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'blackAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'blackAplha.100'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};



const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2} color={'brand.600'}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (event) => {
      event.preventDefault();
      const emailAddress = {
        email
      }
      // send data over server
      try {
        const { data } = await axios({
          url: "./api/addemail",
          method: "POST",
          data: emailAddress
        })
        console.log("Worked", data)
      } catch (error) {
        console.log(error)
      }

  }
  
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.100')}
      color={useColorModeValue('gray.700', 'gray.700')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 2fr' }}
          spacing={4}>
          <Stack spacing={8}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              © 2023 Bricks Design Haus Design.
              <br /> 
              All rights reserved
              <br />
              Powered by Chakra UI
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Github'} href={'https://github.com/cjbricks'}>
                <FaGithub />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://instagram.com/oreo.blizman'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Email'} href={'mailto:cj.christian.web@gmail.com'}>
                <FaLaptop />
              </SocialButton>
              
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'/BodyComps/Rules'} target="_blank">About</Link>
            <Link href={'/ContactPage'}>Contact</Link>
            
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'mailto:cj.christian.web@gmail.com'} target='_blank'>Help</Link>
            <Link href={'https://baseball-reference.com'}>Resources</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Related Sites</ListHeader>
            <Link href={'https://bbb-design.vercel.app'} target='_blank'>Bricks Design Haus</Link>
            <Link href={'https://baseball-reference.com'} target='_blank'>Baseball Reference</Link>
            <Link href={'https://jomboymedia.com'} target="_blank">Jomboy Media <br /> (not affiliated)</Link>
          </Stack>
      
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                value={email}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
                onChange={(e) => {setEmail(e.target.value)}}
              />
              
              <IconButton
                bg={useColorModeValue('brand.700')}
                color={useColorModeValue('gray.800')}
                _hover={{
                  bg: 'brand.900',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
                onClick={handleSubmit}
              />
              
            </Stack>
              </Stack> 
        </SimpleGrid>
      </Container>
    </Box>
  );
}
