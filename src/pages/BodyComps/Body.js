import { React }from 'react';
import txLogo from 'public/logos/team-logos/rangers-logo.png'
import dtLogo from 'public/logos/team-logos/detroit-tigers-logo.png'
import angelsLogo from 'public/logos/team-logos/la-angels-logo.png'
import bosLogo from 'public/logos/team-logos/red-sox-logo.png'
import sdLogo from 'public/logos/team-logos/san-diego-padres-logo.png'
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
