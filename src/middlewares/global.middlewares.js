const userService = require('../sevices/user.service.js');
const mongoose = require('mongoose');

const ValidId = (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid Id" });
    }

    next();
};

const validUser = async (req, res, next) => {
    const id = req.params.id;

    const user = await userService.findByIdService(id);

    if (!user) {
        return res.status(400).send({ message: "User not found" });
    }

    req.id = id
    req.user = user;
    
    next();
};

module.exports = { ValidId, validUser };