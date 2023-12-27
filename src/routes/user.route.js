const route = require('express').Router();
const userController = require("../Controllers/user.constroller.js");
const { ValidId, validUser } = require('../middlewares/global.middlewares.js');

route.post('/', userController.create);
route.get('/', userController.findAll);
route.get('/:id', ValidId, validUser, userController.findById);
route.patch('/:id',ValidId, validUser, userController.update);

module.exports = route;