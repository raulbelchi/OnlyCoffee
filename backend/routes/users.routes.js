import { Router } from 'express';
import { getUsers } from '../controllers/users.controller.js';
const router = Router();

router.get('/users', getUsers)
/*
router.post('/posts')
router.put('/posts/:id')
router.delete('/posts/:id')
router.get('/posts/:id')
*/

export default router;