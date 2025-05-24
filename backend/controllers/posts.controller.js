import { Post } from '../models/Posts.js';

export const getPosts = async (req, res) => {
    try{
        const posts = await Post.findAll()
        res.json(posts);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getMyPosts = async (req, res) => {
    try{
        const myPosts = Post.findAll({ where: { user_id } })
        res.json(myPosts);
    } catch(error) {
        return res.status(500).json({message: error.message})
    }
}

export const createPost = async (req, res) => {
    try{
        const { metodoEx, cafetera, cafe, intesidad, descripcion, user_id } = req.body;

        // Verificamos si se ha subido una imagen correctamente
        if (!req.file) {
            return res.status(400).json({ message: "No se envió ninguna imagen." });
        }

        const foto = req.file.name
        const newPost = await Post.create({
            metodoEx,
            cafetera,
            cafe,
            intesidad,
            descripcion,
            user_id,
            foto
        });
        res.json(newPost);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}