import { Router } from 'express';
import { getUsers, createUser } from '../controllers/users.controller.js';
const router = Router();

router.get('/users', getUsers)
router.post('/users', createUser)
/*
router.put('/posts/:id')
router.delete('/posts/:id')
router.get('/posts/:id')
*/

export default router;