import Posts from './Posts'
import { useState } from 'react'

function Profile() {

    const [subirImagen, setSubirImagen] = useState(false)

    const toggleSubirImagen = () => {
        setSubirImagen(!subirImagen)
    }

    const cambiarImagen = async (e) => {
        e.preventDefault()
    }

  return (
    <div className='flex flex-row justify-center h-screen my-10'>
        <div className='flex flex-col items-center'>
            <div className='rounded-full w-80 h-80 flex items-center justify-center overflow-hidden mb-5'> 
                <img src='/images/FotoLinkedIn.jpg' alt="foto taza café" className='w-80 h-auto object-cover'/>
            </div>
            <h2 className='font-cooper text-3xl mb-5'>@raulbelchi_</h2>
            <button onClick={toggleSubirImagen} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-auto mb-5'>
                Cambiar imagen
            </button>
            {/* EL formulario solo se muestra si el estado es true */}
            {subirImagen && (
                <form 
                    onSubmit={cambiarImagen}
                    className='bg-coffee-light rounded-xl flex flex-col items-center justify-center p-4 h-auto w-auto'
                >
                    <input className='bg-white mb-3 font-lato rounded p-1' type='file' accept='image/*'/>
                    <div className='flex flex-row gap-3'>
                        <button type='submit' className='bg-coffee text-white rounded px-2 py-1 font-lato'>Aceptar</button>
                        <button type='button' onClick={toggleSubirImagen} className='bg-white text-coffee rounded px-2 py-1 font-lato'>Cerrar</button>
                    </div>
                </form>
            )}
        </div>
        <div className='flex flex-col items-center mb-10'>
            <h1 className='font-cooper text-5xl text-coffee'>Mis Posts</h1>
            <Posts/>
        </div>
    </div>
  );
}

export default Profile;