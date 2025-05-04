import express from 'express';
import userRoutes from '../routes/users.routes.js';
import postsRoutes from '../routes/posts.routes.js';
import cors from 'cors';

const app = express();

//middlewares
app.use(express.json()) //para recibir datos en formato json
app.use(cors({ //para permitir el acceso desde el frontend
    origin: 'http://localhost:5173', 
}))

app.use(userRoutes)
app.use(postsRoutes)

export default app;