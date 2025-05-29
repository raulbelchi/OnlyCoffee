import { PostLikes } from '../models/PostLikes.js';

export const comprobarLike = async (req, res) => {
    const { user_id, post_id } = req.body

    try{
        const post = await PostLikes.findOne({
            where:{
                user_id,
                post_id
            }
        })

        if(post){
            res.json({existe: true}) //Si el like existe devolvemos true
        } else {
            res.json({existe: false}) //Si el like no existe devolvemos false
        }
        
    } catch (error){
        return res.status(500).json({ message: error.message }); 
    }
}

export const crearRegistro = async (req, res) => {
    const { user_id, post_id } = req.body

    try{
        const post = await PostLikes.create({
            user_id,
            post_id
        })

        res.json(post)
    } catch (error){
        return res.status(500).json({ message: error.message });
    }
}

export const borrarRegistro = async (req, res) => {
    const { user_id, post_id } = req.body

    try{
        const post = await PostLikes.destroy({
            where:{
                user_id,
                post_id
            }
        })

        res.json(post)
    } catch (error){
        return res.status(500).json({ message: error.message });
    }
}

export const getMisLikes = async (req, res) => {
    const { user_id } = req.body

    try{
        const posts = await PostLikes.findAll({
            where:{
                user_id,
            }
        })

        //Devuelvo un array con la id de los posts con mi like
        const ids = posts.map(post => post.post_id)
        res.json(ids)
 
    } catch (error){
        return res.status(500).json({ message: error.message }); 
    }
}