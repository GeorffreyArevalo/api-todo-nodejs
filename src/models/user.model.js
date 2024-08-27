import { Schema, model } from 'mongoose';


const SchemaUser = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido.']
    },
    username: {
        type: String,
        required: [true, 'El nombre de usurio es requerido.'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida.'],
    },

});

export const User = model('User', SchemaUser);
