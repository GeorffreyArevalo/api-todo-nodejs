

import { Router } from "express";
import { check } from "express-validator";
import { createUser, login, regenerateJwt } from "../controllers/auth.controller.js";
import { existUserByUsername } from "../helpers/validators-db.helpers.js";
import { validateJwt } from "../middlewares/validate-jwt.middleware.js";
import { validateFields } from "../middlewares/validators.middleware.js";


const router = Router();

router.get('/newsession', validateJwt, regenerateJwt);

router.post('/create', [
    check('name', 'El nombre es obligatorio').notEmpty(),
    check('username', 'El username obligatorio').notEmpty(),
    check('username').custom(existUserByUsername),
    check('password', 'El passord debe contener mínimo 8 caracteres.').isLength({min: 8}),
    validateFields
], createUser);

router.post('/login', [
    check('username', 'El nombre de usuario es obligatorio').notEmpty(),
    check('password', 'La contraseña es obligatoria').notEmpty(),
    validateFields
], login);




export default router;