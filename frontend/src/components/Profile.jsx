import Posts from './Posts'
import { useState } from 'react'
import axios from 'axios'

function Profile() {

    const[imagen, setImagen] = useState('')
    const [formImagen, setFormImagen] = useState(false)
    //Usamos el estado para guardar el usuario para no tener que recargar la página al cambiar la foto
    const[user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    //Función para cambiar la foto de perfil
    const cambiarImagen = async (e) => {
        e.preventDefault()

        //Comprobamos que se haya subido una imagen
        if(!imagen){
            return;
        }

        //Hay que usar FormData ya que estamos trabajando con archivos
        const formData = new FormData()
        formData.append('id', user.id)
        formData.append('pfp', imagen)

        try {
            const response = await axios.put('http://localhost:3000/users/pfp', formData, ); //Llamamos a la función pasaándole los datos del FormData

            //Actualizamos el usuario en el localStorage
            const usuarioActualizado = {
                ...user,
                profilePicture: response.data.profilePicture
            };
            localStorage.setItem('user', JSON.stringify(usuarioActualizado))
            setUser(usuarioActualizado) //Para actualizar la foto sin recargar la página
            setFormImagen(!formImagen) //Volvemos a ocultar el formulario para subir la imagen
        } catch (error) {
            console.error('Error al subir la imagen:', error.response?.data || error.message || error)
        }
    }

  return (
    <div className='flex flex-row justify-center h-screen my-10'>
        <div className='flex flex-col items-center'>
            <div className='rounded-full w-80 h-80 flex items-center justify-center overflow-hidden mb-5'> 
                <img src={'http://localhost:3000/pfp/' + user.profilePicture } alt="foto taza café" className='w-80 h-auto object-cover'/>
            </div>
            <h2 className='font-cooper text-3xl mb-5'>@raulbelchi_</h2>
            <button onClick={() => {setFormImagen(!formImagen)}} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-auto mb-5'>
                Cambiar imagen
            </button>
            {/* EL formulario solo se muestra si el estado es true */}
            {formImagen && (
                <form 
                    onSubmit={cambiarImagen}
                    className='bg-coffee-light rounded-xl flex flex-col items-center justify-center p-4 h-auto w-auto'
                >
                    <input 
                        className='bg-white mb-3 font-lato rounded p-1' 
                        type='file' 
                        accept='image/*'
                        onChange={ (e) => setImagen(e.target.files[0])}
                    />
                    <div className='flex flex-row gap-3'>
                        <button type='submit' className='bg-coffee text-white rounded px-2 py-1 font-lato'>Aceptar</button>
                        <button type='button' onClick={() => {setFormImagen(!formImagen)}} className='bg-white text-coffee rounded px-2 py-1 font-lato'>Cerrar</button>
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