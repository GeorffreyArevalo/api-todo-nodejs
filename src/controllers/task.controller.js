import { request, response } from "express";
import { Task } from "../models/index.js";


export const findAllTask = async( req = request, resp = response ) => {

    try {
        
        const tasks = await Task.find().populate('user', 'name username');

        resp.status(200).json({
            ok: true,
            msg: 'Tareas consultadas correctamente.',
            tasks
        });


    } catch (error) {
        
        resp.status(500).json({
            ok: false,
            msg: 'Error interno del servidor.'
        });

    }

}

export const findTaskById = async(req = request, resp = response) => {

    try {
        
        const { id } = req.params;

        const task = await Task.findById(id).populate('user');

        if(!task){
            return resp.status(404).json({
                ok: false,
                msg: 'Tarea no encotrada',
            });
        }

        resp.status(200).json({
            ok: true,
            msg: 'Tarea encontrada',
            task
        })

    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Error interno del servidor.'
        });
    }

}

export const findAllTaskByUser =  async( req = request, resp = response ) => {
 
    try {
        
        const user = req.authUser;

        const {state} = req.query;

        const query = {
            user: user
        }

        if(state) {
            query.state = state;
        }

        const tasks = await Task.find(query).populate('user', 'name username');

        resp.status(200).json({
            ok: true,
            msg: 'Tareas del usuario encontradas',
            tasks
        })

    } catch (error) {
        
    }

}


export const createTask = async( req = request, resp = response ) => {

    try {
        
        const { title, description, state } = req.body;
        const user = req.authUser;

        const task = new Task({
            title, description, state, user
        });

        await task.save();

        resp.status(201).json({
            ok: true,
            msg: 'Tarea creada correctemente.',
            task
        });


    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Error interno del servidor.'
        });
    }

}

export const updateTask = async(req = request, resp = response) => {

    try {
        
        const { id } = req.params;
        const { title, state, description } = req.body;
        const user = req.authUser;

        const taskFound = await Task.findById(id).populate('user');

        if(!taskFound) {
            return resp.status(404).json({
                ok: false,
                msg: 'Tarea a actualizar no encontrada.'
            });
        }

        if( user.id !== taskFound.user.id ) {
            return resp.status(401).json({
                ok: false,
                msg: 'No tiene permisos de actualizar la tarea.'
            });
        }

        const task = { title, description, state };

        const taskUpdated = await Task.findByIdAndUpdate(id, task, { new: true }).populate('user', 'name username');

        resp.status(201).json({
            ok: true,
            msg: 'Tareea actualizada conrrectamente.',
            task: taskUpdated,
        })

    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Error interno del servidor.'
        });
    }

}

export const deleteTask = async( req = request, resp = response ) => {

    try {
        
        const {id} = req.params;
        const user = req.authUser;

        const taskFound = await Task.findById(id).populate('user');

        if(!taskFound) {
            return resp.status(404).json({
                ok: false,
                msg: 'Tarea a eliminar no encontrada.'
            });
        }

        if( user.id !== taskFound.user.id ) {
            return resp.status(401).json({
                ok: false,
                msg: 'No tiene permisos de eliminar la tarea.'
            });
        }

        const taskDelete = await Task.findByIdAndDelete(id).populate('user', 'name username');

        resp.status(201).json({
            ok: true,
            msg: 'Tarea eliminada correctamente.',
            task: taskDelete
        });

    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Error interno del servidor.'
        });
    }

}

