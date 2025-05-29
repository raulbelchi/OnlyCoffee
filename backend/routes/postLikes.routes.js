import { Router } from 'express';
import { comprobarLike, crearRegistro, borrarRegistro, getMisLikes } from '../controllers/postLikes.controller.js'

const router = Router();

router.post('/postlikes/comprobarLike', comprobarLike)
router.post('/postlikes/crearRegistro', crearRegistro)
router.delete('/postlikes/borrarRegistro', borrarRegistro)
router.post('/postlikes/getMisLikes', getMisLikes)

export default router;