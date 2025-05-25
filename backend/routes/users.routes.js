import { Router } from 'express';
import { getUsers, createUser, getUserPosts, loginUser, cambiarPfp, getUserPfp, getUserUsername } from '../controllers/users.controller.js';
import { subirPfp } from '../src/multer.js';
const router = Router();

router.get('/users', getUsers)
router.post('/users', createUser)
router.get('/users/:id/posts', getUserPosts)
router.post('/login', loginUser)
router.put('/users/pfp', subirPfp.single('pfp'), cambiarPfp)
router.post('/user/pfp', getUserPfp);
router.post('/user/username', getUserUsername);

export default router;