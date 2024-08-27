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


SchemaUser.methods.toJSON = function() {
    const { __v, password, _id, ...user } = this.toObject();
    user.id = _id;
    return user;
}

export const User = model('User', SchemaUser);
