
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import swaggerUI from 'swagger-ui-express';

import { connectionDatabase } from '../database/connection.database.js';
import routerAuth from '../routes/auth.routes.js';

import { swaggerDocumentationSpec } from '../documentation/swagger.documentation.js';
import routerTask from '../routes/task.routes.js';

export class Application {


    constructor(){
        dotenv.config();

        this.paths = {
            auth: '/auth',
            task: '/task'
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
        this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup( swaggerDocumentationSpec ));
    }

    async connectionDatabaseApplication() {
        await connectionDatabase();
        console.log('Base de datos conectada correctamente.');
    }

    defineRouters() {
        this.app.use( this.paths.auth, routerAuth );
        this.app.use( this.paths.task, routerTask );
    }

    start() {
        this.app.listen( this.port, () => {
            console.log(`Aplicacion de servidor en el puerto ${this.port}`);
        });
    }
    
}
