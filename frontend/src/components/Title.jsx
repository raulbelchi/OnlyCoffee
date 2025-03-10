import React from 'react';

function Title() {
  return (
    <div 
      className='flex flex-col justify-center items-center h-screen gap-4 text-white bg-cover bg-center
      bg-[url(/images/Fondo-Degradado.jpg)] z-10'
    >
      <img src='/images/Logo-OC-Texto-blanco.webp' alt="logo" className='w-250 -mt-20'/>
      <h2 className='text-2xl md:text-4xl'>Tu foro online sobre café</h2>
      <div className='flex flex-row gap-x-4'>
        <button className='bg-coffee text-white p-2 rounded-md cursor-pointer'>Registrarse</button>
        <button className='bg-white text-coffee p-2 rounded-md cursor-pointer'>Iniciar sesión</button>
      </div>
    </div>
  );
}

export default Title;