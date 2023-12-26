const route = require('express').Router();
const userController = require("../Controllers/user.constroller.js");

route.post('/', userController.create);

module.exports = route;