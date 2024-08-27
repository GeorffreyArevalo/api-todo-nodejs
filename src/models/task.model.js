import { Schema, model } from 'mongoose';

const SchemaTask = Schema({

    title: {
        type: String,
        required: [true, 'El título de la tarea es requerido.']
    },
    description: {
        type: String,
        required: false,
    },
    state: {
        type: String,
        required: true,
        default: 'Pending' //? Pending, Progress, Finished
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});


export const Task = model('Task', SchemaTask);


