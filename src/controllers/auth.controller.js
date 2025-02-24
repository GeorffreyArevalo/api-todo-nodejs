import bcryptjs from 'bcryptjs';
import { request, response } from "express";

import { generateJwt } from '../helpers/generate-jwt.helper.js';
import { User } from '../models/index.js';

export const createUser = async( req = request, resp = response ) => {

    try {
        
        const {name, username, password} = req.body;

        const user = new User({
            name, username, password
        });

        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);

        await user.save();

        const token = await generateJwt( user.id );

        resp.status(201).json({
            ok: true,
            msg: 'Usuario creado correctamente.',
            user,
            token,
        });

    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Error interno del servidor.'
        });
    }

}


export const login = async( req = request, resp = response ) => {

    try {
        
        const {username, password} = req.body;

        const user = await User.findOne({username});

        if( !user ){
            return resp.status(401).json({
                ok: false,
                msg: 'Credenciales no válidas.'
            });
        }

        const passwordValid = bcryptjs.compareSync(password, user.password);

        if( !passwordValid ){
            return resp.status(401).json({
                ok: false,
                msg: 'Credenciales no válidas.'
            });
        }

        const token = await generateJwt( user.id );

        resp.status(200).json({
            ok: true,
            msg: 'Ha iniciado sesión correctamte.',
            user,
            token,
        });


    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Error interno del servidor.'
        });
    }

}

export const regenerateJwt = async( req = request, resp = response ) => {

    try {
        
        const userAuth = req.authUser;

        const token = await generateJwt(userAuth.id);

        resp.status(200).json({
            ok: true,
            msg: 'Token regenerado.',
            user: userAuth,
            token,
        });

    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Error interno del servidor.'
        });
    }

}
