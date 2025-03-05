import React from 'react';
import logo from '../assets/images/Logo-OC-blanco.svg';

function Header() {
  console.log("header cargado");
  return (
    <div className='header'>
      <img src= {logo} alt="logo"/>
      <ul className='flex !mr-20 gap-x-4'>
        <li>Registrarse</li>
        <li>Iniciar sesión</li>
      </ul>
    </div>
  );
}

export default Header;