import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div 
      className='flex flex-row justify-between items-center bg-coffee text-white h-20 
      font-cooper fixed w-full z-50'
    >
      <Link to='/'>
        <img src='images/Logo-OC-blanco.svg' alt="logo" className='h-20 !ml-5'></img>
      </Link>
      
      <ul className='flex flex-col md:flex-row !mr-20 gap-x-4 text-lg md:text-xl'>
        <Link to='/register'>
          <li> Registrarse</li>
        </Link>
        <Link to='/login'>
          <li>Iniciar sesión</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;