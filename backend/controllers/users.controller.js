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

export const cambiarPfp = async(req, res) => {
    const { id } = req.body

    // Verificamos si se ha subido la imagen correctamente
    if (!req.file) {
        return res.status(400).json({ message: "No se envió ninguna imagen." });
    }

    try{
        const nuevaFoto = req.file.filename

        const actualizar = await User.update(
            {profilePicture: nuevaFoto},
            {where: {id}}
        );

        //actualizar[0] es el número de filas afectadas
        if(actualizar[0] === 0){
            return res.status(404).json({ message: "Usuario no encontrado." });
        }

        res.json({
            message: "Foto de perfil actualizada correctamente",
            profilePicture: nuevaFoto
        });
    } catch(error){
        return res.status(500).json({ message: error.message });
    }
}

export const getUserPfp = async(req, res) => {
    const { id } = req.body

    try {
    //Buscar usuario
    const user = await User.findOne({where: { id } });
    if(!user){
        return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    //Si se encuentra al usuario nos devuelve su foto de perfil
    res.json(user.pfp);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getUserUsername = async(req, res) => {
    const { id } = req.body

    try {
    //Buscar usuario
    const user = await User.findOne({where: { id } });
    if(!user){
        return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    //Si se encuentra al usuario nos devuelve su foto de perfil
    res.json(user.username);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}