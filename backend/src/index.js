import app from './app.js';
import {sequelize} from '../database/database.js';

async function main(){
    try{
        await sequelize.sync({force: false})
        app.listen(3000)
        console.log('Servidor corriendo en el puerto 3000')
    } catch (error) {
        console.error('No es posible conectarse al servidor:', error)
    }
}

main()
