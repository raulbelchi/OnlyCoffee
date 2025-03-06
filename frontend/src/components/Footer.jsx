import React from 'react';
import logoTexto from '../assets/images/Logo-OC-Texto-blanco.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  console.log("footer cargado");
  return (
    <div className='footer'>
      <img src= {logoTexto} alt="logo" className='!ml-5 w-32 md:w-40'/>
      <ul className='flex !mr-20 gap-x-6 text-xl md:text-3xl'>
        <li><FontAwesomeIcon icon={faInstagram} /></li>
        <li><FontAwesomeIcon icon={faXTwitter} /></li>
        <li><FontAwesomeIcon icon={faLinkedin} /></li>
        <li><FontAwesomeIcon icon={faGithub} /></li>
      </ul>
    </div>
  );
}

export default Footer;