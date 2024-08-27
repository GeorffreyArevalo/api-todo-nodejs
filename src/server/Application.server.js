
import dotenv from 'dotenv';
import express from 'express';

import { connectionDatabase } from '../database/connection.database.js';

export class Application {


    constructor(){
        dotenv.config();
        
        this.app = express();
        this.connectionDatabaseApplication();
    }

    async connectionDatabaseApplication() {
        await connectionDatabase();
        console.log('Base de datos connectada correctamente.');
    }

    start() {
        this.app.listen( 3000, () => {
            console.log('Aplicacion de servidor en el puerto 3000!!!');
        });
    }
    
}
