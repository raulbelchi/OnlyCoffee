import { Router } from 'express';
import { getUsers, createUser, getUserPosts } from '../controllers/users.controller.js';
const router = Router();

router.get('/users', getUsers)
router.post('/users', createUser)
router.get('/users/:id/posts', getUserPosts)


export default router;