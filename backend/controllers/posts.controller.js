import { Post } from '../models/Posts.js';
import { User } from '../models/Users.js';

export const getPosts = async (req, res) => {
    try{
        const orden = req.params.orden
        
        const posts = await Post.findAll({
            // Para que también seleccione el nombre de usuario y la foto de perfil del usuario que ha subido el post
            include: [{
                model: User,
                attributes: ['username', 'profilePicture']
            }],
            order: [[orden, 'DESC']] //Para ordenar del más nuevo al más antiguo
        })
        console.log(JSON.stringify(posts, null, 2));  // Ver exactamente qué trae
        res.json(posts);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getMyPosts = async (req, res) => {
    try{
        const { user_id } = req.body;

        const myPosts = await Post.findAll({ 
            where: { user_id } ,
            // Para que también seleccione el nombre de usuario y la foto de perfil del usuario que ha subido el post
            include: [{
                model: User,
                attributes: ['username', 'profilePicture']
            }],
            order: [['createdAt', 'DESC']] //Para ordenar del más nuevo al más antiguo
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
        return res.status(500).json({message: error.message})
    }

}

export const darLike = async (req, res) => {
    const { id } = req.body

    try {
        //Guardamos el post en una variable para acceder a sus likes
        const post = await Post.findOne({where: { id }})
        if (!post) {
            return res.status(404).json({ message: 'No se ha encontrado el post' });
        }

        const sumarLike = Post.update(
            {likes: post.likes + 1},
            {where: { id }}
        )
        res.json('Like añadido correctamente')
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const quitarLike = async (req, res) => {
    const { id } = req.body

    try {
        //Guardamos el post en una variable para acceder a sus likes
        const post = await Post.findOne({where: { id }})

        //Comprobamos que el post exista y que sea mayor o igual que 0 antes de lanzar la consulta
        if (!post) {
            return res.status(404).json({ message: 'No se ha encontrado el post' });
        } else if(post.likes >= 0){
            const restarLike = Post.update(
            {likes: post.likes - 1},
            {where: { id }}
            )

            res.json('Like eliminado correctamente')
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}