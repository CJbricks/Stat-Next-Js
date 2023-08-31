import { React }from 'react';
import txLogo from 'public/new-logos/2.png'
import dtLogo from 'public/new-logos/4.png'
import angelsLogo from 'public/new-logos/5.png'
import bosLogo from 'public/new-logos/3.png'
import sdLogo from 'public/new-logos/1.png'
import Navbar from '../HeaderComps/Navbar.js'
import Footer from './Footer.js'
import Header from '../HeaderComps/Header.js'
import Sheet from './Sheet.js'
import Form from './Form.js'
import LogoCard from './LogoCard.js'
import { BsCaretDownSquareFill } from 'react-icons/bs';



export default function Body() {

  const teamLogos = [txLogo, dtLogo, angelsLogo, bosLogo, sdLogo];
  {/*}
  useEffect (() => {
    if (!cardRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        newLimit();
        observer.unobserve(entry.target)
      }
    }, [isLast]);

    observer.observe(cardRef.current)
  })
*/}

  return (
    <>
    
    <Navbar />
    <Header />
     <Sheet />
      <LogoCard logos={teamLogos} />
      <Form />
    
    <Footer />
    </>

  )
}
