import React from 'react';


function PostsForm() {

    return (
        <div className="absolute h-auto w-auto bg-coffee-light text-white rounded-xl p-6 flex flex-col z-50 font-lato items-center font-bold">
            <h2 className='font-cooper font-bold text-3xl mb-3 '>¿Qué has bebido hoy?</h2>
            <form className='flex gap-4 justify-bewween'>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <div className='flex flex-col'>
                            Método de extracción:
                            <input type='text' className='bg-white rounded-l mb-2'/>

                            Café:
                            <input type='text' className='bg-white rounded-l'/>
                        </div>
                        <div className='flex flex-col '>
                            Cafetera:
                            <input type='text' className='bg-white rounded-l mb-2'/>

                            Intensidad: 
                            <input type='text' className='bg-white rounded-l'/>
                        </div>
                    </div>
                    Describe tu café:
                    <textarea className='bg-white h-20 rounded-xl'/>
                </div>
                <div>
                    <input type="file" accept='image/*' className='bg-white h-full rounded-l text-black p-2 flex items-center justify-center'/>
                </div>
            </form>
            <div className='flex flex-row-reverse gap-4 mt-2 w-full'>
                <button className='bg-coffee text-white rounded-l px-2 py-1 font-normal'>Subir</button>
                <button className='bg-white text-coffee rounded-l px-2 py-1 font-normal'>Cerrar</button>
            </div>
        </div>
    );
}

export default PostsForm;