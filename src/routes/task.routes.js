import { Router } from "express";
import { body, check, param, query } from "express-validator";
import { createTask, deleteTask, findAllTask, findAllTaskByUser, findTaskById, updateTask } from "../controllers/task.controller.js";
import { validateStateTask } from "../helpers/index.js";
import { validateJwt } from "../middlewares/validate-jwt.middleware.js";
import { validateFields } from "../middlewares/validators.middleware.js";


const router = Router();

router.get('/', validateJwt, findAllTask);

router.get('/by/user', [
    validateJwt,
    query('state', 'El estado no es válido').custom(validateStateTask),
    validateFields
], findAllTaskByUser);

router.get('/:id', [
    validateJwt,
    param('id', 'Debe ser un id válido.').isMongoId(),
    validateFields
], findTaskById );

router.post('/', [
    validateJwt,
    body('title', 'El título es requerido.').notEmpty(),
    body('state').custom(validateStateTask),
    validateFields,
],  createTask );

router.put('/:id', [
    validateJwt,
    check('id', 'Debe ser un id válido.').isMongoId(),
    body('state').custom(validateStateTask),
    validateFields
], updateTask);

router.delete('/:id', [
    validateJwt,
    param('id', 'Debe ser un id válido').isMongoId(),
    validateFields
], deleteTask);


export default router;

