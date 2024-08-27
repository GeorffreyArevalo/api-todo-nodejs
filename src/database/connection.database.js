

import mongoose from "mongoose";

export const connectionDatabase = async() => {

    try {
        await mongoose.connect( process.env.DATABASE_CONN_URL , {
            dbName: process.env.DATBASE_NAME
        });
    } catch (error) {
        throw new Error('Hubo un error al conectar la base de datos.');
    }

}

