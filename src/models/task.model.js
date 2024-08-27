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

SchemaTask.methods.toJSON = function() {
    const {__v, _id, user, ...task} = this.toObject();
    const { _id: userId, __v: _, password, ...userRest } = user;
    userRest.id = userId;
    task.user = userRest;
    task.id = _id;
    return task;
}


export const Task = model('Task', SchemaTask);


