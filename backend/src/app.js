import express from 'express';
import userRoutes from '../routes/users.routes.js';

const app = express();

//middlewares
app.use(express.json()) //para recibir datos en formato json

app.use(userRoutes)

export default app;