import { request, response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/index.js";


export const validateJwt = async( req = request, resp = response, next ) => {


    try {
        const bearerToken = req.header('Authorization');
        
        if( !bearerToken || !bearerToken.startsWith('Bearer ') ) {
            return resp.status(401).json({
                ok: false,
                msg: 'Acceso denegado.'
            });
        }

        const token = bearerToken.substring(7);

        const {uid} = jwt.verify( token, process.env.JWT_SECRET);

        const user = await User.findById(uid);

        if(!user){

            return resp.status(401).json({
                ok: false,
                msg: 'Acceso denegado.'
            })
        }

        req.authUser = user;

        next();

    } catch (error) {
        
        resp.status(401).json({
            ok: false,
            msg: 'Acceso denegado.'
        });

    }


}

