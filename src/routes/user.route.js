import { Router } from 'express';
const route = Router();
import userController from "../Controllers/user.constroller.js";
import { ValidId, validUser } from '../middlewares/global.middlewares.js';

route.post('/', userController.create);
route.get('/', userController.findAll);
route.get('/:id', ValidId, validUser, userController.findById);
route.patch('/:id', ValidId, validUser, userController.update);

export default route;