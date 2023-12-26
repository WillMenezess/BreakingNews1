const route = require('express').Router();
const userController = require("../Controllers/user.constroller.js");

route.get('/', userController.soma);

module.exports = route;