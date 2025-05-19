import { Router } from 'express';
import { getPosts, getMyPosts, createPost } from '../controllers/posts.controller.js';
import { subirPost } from '../src/multer.js';

const router = Router();

router.get('/posts', getPosts);
router.get('/posts/:id_user', getMyPosts)
router.post('/posts', createPost);

export default router;