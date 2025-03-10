import React from 'react';

function Header() {
  return (
    <div 
      className='flex flex-row justify-between items-center bg-coffee text-white h-20 
      font-cooper fixed w-full z-50'
    >
      <img src='images/Logo-OC-blanco.svg' alt="logo" className='h-20 !ml-5'/>
      <ul className='flex flex-col md:flex-row !mr-20 gap-x-4 text-lg md:text-xl'>
        <li>Registrarse</li>
        <li>Iniciar sesión</li>
      </ul>
    </div>
  );
}

export default Header;