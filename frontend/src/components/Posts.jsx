
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useState, useEffect } from 'react'

function Posts() {

    const[posts, setPosts] = useState([])

    //useEffect lo uso únicamente para que se carguen los posts nada más renderizar el componente
    useEffect(() => {
        const mostrarPosts = async () => {
            try{
                const response = await axios.get('http://localhost:3000/posts')
                setPosts(response.data)
            } catch(error) {
                console.error('Error al intentar acceder a los posts:', error);
            }
        }

        mostrarPosts()
    }, [])


    return (
        <div className='gap-4 p-4 h-full w-300 flex flex-col items-center overflow-y-scroll bg-fixed'>
            { posts.map((post) => (
                <div key={ post.id } className='flex w-3/4 h-auto bg-gray-200 p-8 rounded-2xl justify-between'>
                    <div>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full w-20 h-20 flex items-center justify-center overflow-hidden mb-5'> 
                                <img src= {'http://localhost:3000/pfp/' + post.user.profilePicture} alt="foto de perfil" className='w-20 h-auto object-cover'/>
                            </div>
                            <span className='font-bold text-xl'>@{ post.user.username }</span>
                        </div>
                        <div className='flex gap-8 mt-4'>
                            <div>
                                <span className='font-bold text-lg'>Método de extracción</span><br/>
                                <span className='text-lg'>{ post.metodoEx }</span>
                            </div>
                            <div>
                                <span className='font-bold text-lg'>Cafetera</span><br/>
                                <span className='text-lg'>{ post.cafetera }</span>
                            </div>
                        </div>
                        <div className='flex gap-8 mt-4'>
                            <div>
                                <span className='font-bold text-lg'>Café</span><br/>
                                <span className='text-lg'>{ post.cafe }</span>
                            </div>
                            <div>
                                <span className='font-bold text-lg'>Intensidad</span><br/>
                                <span className='text-lg'>{ post.intensidad }/5</span>
                            </div>
                        </div>
                        <div className='mt-4 mr-30 text-justify'>
                            <span className='font-bold text-lg'>Descripción</span><br/>
                            <span className='text-lg '>{ post.descripcion }</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className='rounded-lg h-100 w-auto flex items-center justify-center overflow-hidden mb-5'> 
                            <img src={'http://localhost:3000/postPictures/' + post.foto} className='h-100 w-auto  object-cover'/>
                        </div>
                        
                        <div className="flex justify-end items-center gap-2 text-lg font-semibold">
                            <span>0</span>
                            <FontAwesomeIcon icon={faHeart} className='cursor-pointer text-gray-500'/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Posts;