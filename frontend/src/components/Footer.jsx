import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div 
      className='flex flex-row justify-between items-center bg-coffee-dark text-white h-20
      w-full overflow-hidden bottom-0'
    >
      <img src='/images/Logo-OC-Texto-blanco.svg' alt="logo" className='!ml-5 w-32 md:w-40'/>
      <ul className='flex !mr-20 gap-x-6 text-xl md:text-3xl'>
        <li><a href="http://instagram.com/raulbelchi_" target="_blank"><FontAwesomeIcon icon={faInstagram} href='http://instagram/raulbelchi_'/></a></li>
        <li><a href="https://x.com/raulbelchi_" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></a></li>
        <li><a href="https://www.linkedin.com/in/ra%C3%BAl-belch%C3%AD-mart%C3%ADnez-895595316/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href="https://github.com/raulbelchi" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
      </ul>
    </div>
  );
}

export default Footer;