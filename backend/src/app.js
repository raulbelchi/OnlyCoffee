import express from 'express';
import userRoutes from '../routes/users.routes.js';
import postsRoutes from '../routes/posts.routes.js';
import postLikesRoutes from '../routes/postLikes.routes.js';
import cors from 'cors'; //Escuchar peticiones desde el frontend
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();

//middlewares
app.use(express.json()) //para recibir datos en formato json
app.use(cors({ //para permitir el acceso desde el frontend
    origin: 'http://localhost:5173', 
}))

//Servir las imágenes al frontend
const CURRENT_DIR = dirname(fileURLToPath(import.meta.url))
app.use('/postPictures', express.static(join(CURRENT_DIR, "../imgs/postPictures")))
app.use('/pfp', express.static(join(CURRENT_DIR, "../imgs/pfp")))

// Middleware JSON para todas las rutas EXCEPTO la de subir imagen
app.use((req, res, next) => {
    if (req.path === '/users/pfp' && req.method === 'PUT') {
        // No hacer nada, dejar que multer maneje el body
        return next();
    }
    express.json()(req, res, next);
});

app.use(userRoutes)
app.use(postsRoutes)
app.use(postLikesRoutes)

export default app;