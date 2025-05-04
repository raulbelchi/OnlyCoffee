import { Post } from '../models/Posts.js';

export const getPosts = async (req, res) => {
    try{
        const posts = await Post.findAll()
        res.json(posts);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const createPost = async (req, res) => {
    try{
        const { metodoEx, cafetera, cafe, intesidad, descripcion, user_id, foto } = req.body;

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