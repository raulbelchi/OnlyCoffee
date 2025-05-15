import { User } from '../models/Users.js';
import { Post } from '../models/Posts.js';
import bcrypt from 'bcrypt'; //Cifrar contraseñas

export const getUsers = async (req, res) => {
    try{
        const users = await User.findAll()
        console.log(users);
        res.json(users);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const createUser = async (req, res) => {
    const { username, email, password, profilePicture } = req.body;
    try{
        const contraseñaCifrada = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            username,
            email,
            password: contraseñaCifrada,
            profilePicture
        })
    
        res.json(newUser);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getUserPosts = async (req, res) => {
    const { id } = req.params;
    const posts = await Post.findAll({
        where: { user_id: id }
    })
    res.json(posts);
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        //Buscar usuario
        const user = await User.findOne({where: { email } });
        if(!user){
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        //Comparar contraseña
        const compararContraseña = await bcrypt.compare(password, user.password)
        if(!compararContraseña){
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        //Si el correo y la contraseña están bien nos devuelve los datos del usuario
        res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}