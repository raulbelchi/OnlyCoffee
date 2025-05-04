import express from 'express';
import userRoutes from '../routes/users.routes.js';
import postsRoutes from '../routes/posts.routes.js';

const app = express();

//middlewares
app.use(express.json()) //para recibir datos en formato json

app.use(userRoutes)
app.use(postsRoutes)

export default app;