const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));

// Conectar a la base de datos
const startServer = async () => {
    try {
      await sequelize.authenticate();
      console.log('Base de datos conectada');
  
      app.listen(process.env.PORT, () => {
        console.log(`Servidor corriendo en puerto ${process.env.PORT} 🚀`);
      });
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
    }
  };
  
  startServer();
