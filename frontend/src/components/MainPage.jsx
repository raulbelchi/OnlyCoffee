import Posts from './Posts'
import { useState } from 'react'

function MainPage(){
    const [mostrarForm, setMostrarForm] = useState(false);

    const cambiarEstadoForm = () => {
    setMostrarForm(!mostrarForm);
    }

    return (
        <div className='h-screen w-screen p-5 flex justify-around'>
            <button
                onClick={cambiarEstadoForm}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-auto self-start'
            >
            Nuevo post
            </button>

            <Posts/>

            {/* El formulario solo se muestra si el estado es true */}
            {mostrarForm && (
                <div 
                    className="fixed top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/5 h-auto w-auto bg-coffee-light
                    text-white rounded-xl p-6 flex flex-col z-50 font-lato items-center font-bold border-3 border-coffee"
                >
                    <h2 className='font-cooper font-bold text-3xl mb-3 '>¿Qué has bebido hoy?</h2>
                    <form>
                        <div className='flex gap-4 justify-bewween'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex gap-4'>
                                    <div className='flex flex-col'>
                                        Método de extracción:
                                        <input type='text' className='bg-white rounded mb-2 text-black p-1 text-sm'/>

                                        Café:
                                        <input type='text' className='bg-white rounded text-black p-1 text-sm'/>
                                    </div>
                                    <div className='flex flex-col '>
                                        Cafetera:
                                        <input type='text' className='bg-white rounded mb-2 text-black p-1 text-sm'/>

                                        Intensidad: 
                                        <input type='text' className='bg-white rounded text-black p-1 text-sm'/>
                                    </div>
                                </div>
                                Describe tu café:
                                <textarea className='bg-white h-20 rounded-xl text-black p-1 text-sm'/>
                            </div>
                            <div>
                                <input type="file" accept='image/*' className='bg-white h-full rounded text-black p-2 flex items-center justify-center'/>
                            </div>
                        </div>
                        <div className='flex flex-row-reverse gap-4 mt-2 w-full'>
                            <button type='submit' className='bg-coffee text-white rounded px-2 py-1 font-normal'>Subir</button>
                            <button type='button' onClick={cambiarEstadoForm} className='bg-white text-coffee rounded px-2 py-1 font-normal'>Cerrar</button>
                        </div>
                    </form>
                </div>
            )} 
        </div>
    )
}

export default MainPage;