import React from 'react';

function Info() {
  return (
    <div 
        className='flex flex-row justify-center items-center h-200'
    >
        <img src='/images/cafe.webp' alt="foto taza café" className='rounded-full w-120 h-auto p-4'/>
        <div className='flex flex-col w-200'>
            <h2 className='font-cooper text-4xl mb-4 mx-6'>Comparte tus cafés</h2>
            <p className='text-xl text-justify mx-6'>En OnlyCoffee, el aroma del café se mezcla con la pasión de los amantes de esta bebida. Comparte tus preparaciones,
            descubre nuevas recetas y debate sobre los mejores métodos de extracción. Desde un espresso intenso hasta un cold brew
            refrescante, aquí cada taza tiene una historia que contar.<br/><br/>

            Súmate a la conversación, sube fotos de tus creaciones, recomienda granos y encuentra inspiración en la comunidad.
            ¿Listo para compartir tu café perfecto? 
            </p>
        </div>
    </div>
  );
}

export default Info;