import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
import Body from './BodyComps/Body.js';
import Navbar from './HeaderComps/Navbar.js';
import Footer from './BodyComps/Footer.js';
import { Center } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Stat Sheet 2.0</title>
        <meta name="description" content="Stat Sheet a Javascript game." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
        <Body />
      
      
    </>

    )
  }