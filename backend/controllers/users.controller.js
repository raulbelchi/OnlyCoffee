import { User } from '../models/Users.js';

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
        const newUser = await User.create({
            username,
            email,
            password,
            profilePicture
        })
    
        res.json(newUser);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}