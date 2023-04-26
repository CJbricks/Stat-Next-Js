import React from 'react';
import styles from '@/styles/Home.module.css';
import Facts from './Facts.js';
import Form from './Form.js';



export default function Body() {
  const teamLogos = [];


  return (

    <div className={styles.body}>
      <Facts teamLogos={teamLogos}/>
      <Form />
    </div>

  )
}
