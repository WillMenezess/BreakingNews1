const User = require('../models/User.model.js');

const create = (body) => User.create(body);

module.exports = {
    create,
}