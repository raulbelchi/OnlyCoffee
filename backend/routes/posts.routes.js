import { Router } from 'express';
import { getPosts, getMyPosts, createPost, darLike, quitarLike } from '../controllers/posts.controller.js';
import { subirPost } from '../src/multer.js';

const router = Router();

router.get('/posts', getPosts);
router.post('/myposts', getMyPosts)
router.post('/posts', subirPost.single('foto'), createPost);
router.put('/darLike', darLike)
router.put('/quitarLike', quitarLike)

export default router;