
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { connectionDatabase } from '../database/connection.database.js';
import routerAuth from '../routes/auth.routes.js';

export class Application {


    constructor(){
        dotenv.config();

        this.paths = {
            auth: '/auth'
        }

        this.port = process.env.PORT;
        this.app = express();
        this.connectionDatabaseApplication();
        this.middlewares();
        this.defineRouters();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use( express.static('src/public') );
    }

    async connectionDatabaseApplication() {
        await connectionDatabase();
        console.log('Base de datos connectada correctamente.');
    }

    defineRouters() {
        this.app.use( this.paths.auth, routerAuth );
    }

    start() {
        this.app.listen( this.port, () => {
            console.log(`Aplicacion de servidor en el puerto ${this.port}`);
        });
    }
    
}
