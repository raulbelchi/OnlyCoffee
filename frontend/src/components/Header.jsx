import React from 'react';
import logo from '../assets/images/Logo-OC-blanco.svg';

function Header() {
  return (
    <div className='header'>
      <img src= {logo} alt="logo" className='h-20 !ml-5'/>
      <ul className='flex flex-col md:flex-row !mr-20 gap-x-4 text-lg md:text-xl'>
        <li>Registrarse</li>
        <li>Iniciar sesión</li>
      </ul>
    </div>
  );
}

export default Header;