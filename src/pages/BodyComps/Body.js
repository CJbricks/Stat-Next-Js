import React from 'react';
import styles from '@/styles/Home.module.css'
import Facts from './Facts.js'
import Form from './Form.js'
import txLogo from 'public/logos/team-logos/rangers-logo.png'
import dtLogo from 'public/logos/team-logos/detroit-tigers-logo.png'
import angelsLogo from 'public/logos/team-logos/la-angels-logo.png'
import bosLogo from 'public/logos/team-logos/red-sox-logo.png'
import sdLogo from 'public/logos/team-logos/san-diego-padres-logo.png'
import Navbar from '../HeaderComps/Navbar.js'
import Footer from './Footer.js'
import Header from '../HeaderComps/Header.js'



export default function Body() {
  const teamLogos = [txLogo, dtLogo, angelsLogo, bosLogo, sdLogo];


  return (

    <>
    <Navbar />
    <Header />
      <div className={styles.body}>
        <Facts teamLogos={teamLogos}/>
        <Form />
      </div>
    <Footer />
    </>

  )
}
