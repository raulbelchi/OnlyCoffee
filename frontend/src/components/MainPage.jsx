import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock} from '@fortawesome/free-solid-svg-icons'

import Posts from './Posts'
import { useState } from 'react'
import axios from 'axios';

function MainPage(){
    const [mostrarForm, setMostrarForm] = useState(false);
    const[mensajeError, setMensajeError] = useState('')
    const [filtros, setFiltros] = useState('createdAt')
    //Lo pasaremos como prop para que se actualicen los posts al subir uno nuevo
    const [nuevoPost, setNuevoPost] = useState(false)
    //Datos del formulario
    const[metodoEx, setMetodoEx] = useState('')
    const[cafetera, setCafetera] = useState('')
    const[cafe, setCafe] = useState('')
    const[intensidad, setIntensidad] = useState(1)
    const[descripcion, setDescripcion] = useState('')
    const[fotoPost, setFotoPost] = useState('')

    const user = JSON.parse(localStorage.getItem('user'))

    const subirPost = async (e) => {
        e.preventDefault()

        if(metodoEx === '' || cafetera === '' || cafe === '' || intensidad === '' || descripcion === ''){
            setMensajeError('Por favor, rellena todos los campos.')
            return;
        }

        if(!fotoPost){
            setMensajeError('Por favor, añade una foto.')
            return;
        }

        //Guardamos los datos en un formdata ya que estamos trabajando con imágenes
        const formData = new FormData()
        formData.append('metodoEx', metodoEx)
        formData.append('cafetera', cafetera)
        formData.append('cafe', cafe)
        formData.append('intensidad', intensidad)
        formData.append('descripcion', descripcion)
        formData.append('user_id', user.id)
        formData.append('foto', fotoPost)

        try{
            const response = await axios.post('http://localhost:3000/posts', formData)

            setMostrarForm(!mostrarForm)
            setNuevoPost(!nuevoPost) //Forzamos la actualización
        } catch(error) {
            console.error('Error al enviar el formulario:', error);
        }
    }

    return (
        <div className='h-screen w-screen p-5 flex justify-around'>
            <div className='flex flex-col h-full items-center'>
                <button
                    onClick={() => setMostrarForm(!mostrarForm)}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-auto self-start mb-10'
                >
                Nuevo post
                </button>
                <div
                    className={'flex items-center gap-3 font-lato text-gray-400 font-semibold text-xl cursor-pointer rounded-lg p-2 mb-3 ' + (filtros == 'createdAt' ? 'bg-gray-200' : 'bg-white')}
                    onClick={() => setFiltros('createdAt')}
                >
                    <p>Más recientes</p><FontAwesomeIcon icon={faClock}/>
                </div>
                <div
                    className={'flex items-center gap-3 font-lato text-gray-400 font-semibold text-xl cursor-pointer rounded-lg p-2 ' + (filtros == 'likes' ? 'bg-gray-200' : 'bg-white')}
                    onClick={() => setFiltros('likes')}
                >
                    <p>Más gustados</p><FontAwesomeIcon icon={faHeart}/>
                </div>
            </div>

            {/*Le pasamos la prop para que se actualice cuando se suba un nuevo post o se cambien los filtros*/}
            <Posts nuevoPost = {nuevoPost} filtros = {filtros}/> 

            {/* El formulario solo se muestra si el estado es true */}
            {mostrarForm && (
                <div 
                    className="fixed top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/5 h-auto w-auto bg-coffee-light
                    text-white rounded-xl p-6 flex flex-col z-50 font-lato items-center font-bold border-3 border-coffee"
                >
                    <h2 className='font-cooper font-bold text-3xl mb-3 '>¿Qué has bebido hoy?</h2>
                    <form onSubmit={ subirPost }>
                        <div className='flex gap-4 justify-bewween'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex gap-4'>
                                    <div className='flex flex-col'>
                                        Método de extracción:
                                        <input 
                                            type='text' 
                                            className='bg-white rounded mb-2 text-black p-1 text-sm'
                                            onChange={(e) => {setMetodoEx(e.target.value)}}
                                        />

                                        Café:
                                        <input 
                                            type='text' 
                                            className='bg-white rounded text-black p-1 text-sm'
                                            onChange={(e) => {setCafe(e.target.value)}}
                                        />
                                    </div>
                                    <div className='flex flex-col '>
                                        Cafetera:
                                        <input 
                                            type='text' 
                                            className='bg-white rounded mb-2 text-black p-1 text-sm'
                                            onChange={(e) => {setCafetera(e.target.value)}}
                                        />

                                        Intensidad: 
                                        <select 
                                            value= { intensidad }
                                            name='intensidad' 
                                            className='bg-white rounded text-black p-1 text-sm'
                                            onChange={(e) => {setIntensidad(e.target.value)}}
                                        >
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    </div>
                                </div>
                                Describe tu café:
                                <textarea 
                                    name='descripcion'
                                    className='bg-white h-20 rounded-xl text-black p-1 text-sm'
                                    onChange={(e) => {setDescripcion(e.target.value)}}
                                />
                            </div>
                            <div>
                                <input 
                                    type="file" 
                                    accept='image/*' 
                                    className='bg-white h-full rounded text-black p-2 flex items-center justify-center'
                                    onChange={ (e) => { setFotoPost(e.target.files[0])}}
                                />
                            </div>
                        </div>
                        <div className='flex flex-row-reverse gap-4 mt-2 w-full'>
                            <button type='submit' className='bg-coffee text-white rounded px-2 py-1 font-normal'>Subir</button>
                            <button type='button' onClick={() => setMostrarForm(!mostrarForm)} className='bg-white text-coffee rounded px-2 py-1 font-normal'>Cerrar</button>
                        </div>
                    </form>
                    {/* Para mostrar el mensaje de error en caso de que los datos no sean correctos */}
                    {mensajeError && (
                    <label className="text-red-600">{mensajeError}</label>
                    )}
                </div>
            )} 
        </div>
    )
}

export default MainPage;