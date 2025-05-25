import { Post } from '../models/Posts.js';
import { User } from '../models/Users.js';

export const getPosts = async (req, res) => {
    try{
        const posts = await Post.findAll({
            // Para que también seleccione el nombre de usuario y la foto de perfil del usuario que ha subido el post
            include: [{
                model: User,
                attributes: ['username', 'profilePicture']
            }]
        })
        console.log(JSON.stringify(posts, null, 2));  // Ver exactamente qué trae
        res.json(posts);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getMyPosts = async (req, res) => {
    try{
        const myPosts = Post.findAll({ 
            where: { user_id } ,
            // Para que también seleccione el nombre de usuario y la foto de perfil del usuario que ha subido el post
            include: [{
                model: User,
                attributes: ['username', 'profilePicture']
            }]
        })
        res.json(myPosts);
    } catch(error) {
        return res.status(500).json({message: error.message})
    }
}

export const createPost = async (req, res) => {
    try{
        const { metodoEx, cafetera, cafe, intensidad, descripcion, user_id } = req.body;

        // Verificamos si se ha subido una imagen correctamente
        if (!req.file) {
            return res.status(400).json({ message: "No se envió ninguna imagen." });
        }

        const foto = req.file.filename
        const newPost = await Post.create({
            metodoEx,
            cafetera,
            cafe,
            intensidad,
            descripcion,
            user_id,
            foto
        });
        res.json(newPost);
    } catch (error) {
        console.log('Datos recibidos:', req.body)
        console.log('Archivo recibido:', req.file)
        return res.status(500).json({message: error.message})
    }

}