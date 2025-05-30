
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Posts({ nuevoPost, filtros }) {

    const[posts, setPosts] = useState([])
    // Con esto forzaremos que se actualice el componente al subir un post
    const [recargarPosts, setRecargarPosts] = useState(false);
    // Array en la que se guardarán los post con like
    const [postsConLike, setPostsConLike] = useState([]);

    const location = useLocation() //Para diferenciar en que ruta estamos
    const user = JSON.parse(localStorage.getItem('user'))

    //useEffect lo uso para que se carguen los posts cuando se cambia de ruta o se sube uno nuevo
    useEffect(() => {
        const mostrarPosts = async () => {
            try{
                if(location.pathname === '/mainpage'){ //Si estamos en main mostramos todos los posts
                    const response = await axios.get(`http://localhost:3000/posts/${filtros}`)
                    setPosts(response.data)
                } else if(location.pathname === '/profile'){ //Si estamos en la página del perfil mostramos solo nuestros posts
                    const response = await axios.post('http://localhost:3000/myposts', {
                        user_id: user.id
                    })
                    setPosts(response.data)
                }
                //Guardo los post con mi like
                const likes = await axios.post('http://localhost:3000/postlikes/getMisLikes', {
                    user_id: user.id
                })
                setPostsConLike(likes.data)
            } catch(error) {
                console.error('Error al intentar acceder a los posts:', error);
            }
        }

        mostrarPosts()
    }, [location.pathname, recargarPosts, nuevoPost, filtros]) //El componente se actualiza cuando cambia la ruta, se sube un post o cambian los filtros

    //FUNCIÓN PARA LA GESTIÓN DE LOS LIKES
    const clickLike = async (postID) => {

        const comprobar = await axios.post('http://localhost:3000/postlikes/comprobarLike', {
            user_id: user.id,
            post_id: postID
        })

        if(comprobar.data.existe){ //Si existe el like, lo quitamos
            try{
                //Restamos un like a la tabla Posts
                const quitarLike = await axios.put('http://localhost:3000/quitarLike', {
                    id: postID
                })

                //Borramos el registro del like en la tabla PostLikes
                const borrarRegistro = await axios.delete('http://localhost:3000/postlikes/borrarRegistro', {
                    data: {
                        user_id: user.id,
                        post_id: postID
                    }
                })
                
                setRecargarPosts(!recargarPosts); //Forzamos la recarga del componente
            } catch (error){
                console.error('Error al intentar acceder a los posts:', error);
            }
        } else { //Si no existe el like, lo creamos
            try{
                //Sumamos un like a la tabla Posts
                const sumarLike = await axios.put('http://localhost:3000/darLike', {
                    id: postID
                })

                //Guardamos el registro del like en la tabla PostLikes
                const guardarRegistro = await axios.post('http://localhost:3000/postlikes/crearRegistro', {
                    user_id: user.id,
                    post_id: postID
                })

                setRecargarPosts(!recargarPosts); //Forzamos la recarga del componente
            } catch (error){
                console.error('Error al intentar acceder a los posts:', error);
            }
        }
    }

    return (
        <div className='gap-4 p-4 h-full w-300 flex flex-col items-center overflow-y-scroll bg-fixed'>
            { posts.map((post) => (
                <div key={ post.id } className='flex w-3/4 h-auto bg-gray-200 p-8 rounded-2xl justify-between'>
                    <div className='mr-5'>
                        <div className='flex items-center gap-3'>
                            <div className='rounded-full w-20 h-20 flex items-center justify-center overflow-hidden'> 
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
                        <div className='rounded-lg h-100 w-auto flex items-center justify-center overflow-hidden'> 
                            <img src={'http://localhost:3000/postPictures/' + post.foto} className='h-100 w-auto  object-cover'/>
                        </div>
                        
                        <div className="flex justify-end items-center gap-2 text-lg font-semibold">
                            <span>{ post.likes }</span>
                            <FontAwesomeIcon
                                icon={faHeart}
                                //Buscamos el post en el array de posts que me gustan para determinar el color del botón
                                className={`cursor-pointer ${postsConLike.includes(post.id) ? 'text-red-600' : 'text-gray-500'}`} 
                                onClick={() => clickLike(post.id) }
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Posts;