const userService = require('../sevices/user.service.js');

const create = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({ message: "Submit all fields for registration" })
    }

    const user = await userService.createService(req.body);

    if (!user) {
        return res.status(400).send({ message: "Error creating user" });
    };

    res.status(201).send({
        message: "user created sucessfully",
        user: {
            id: user._id,
            name,
            username,
            email,
            password,
            avatar,
            background,
        },
    });
};

const findAll = async (req, res) => {
    const users = await userService.findAllService();

    if (users.lenght === 0) {
        return res.status(400).send({ message: "There are no registered users" });
    }

    res.send(users)

};

const findById = async (req, res) => {
    const user = req.user;

    res.send(user);
};

const update = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body

    if (!name && !username && !email && !password && !avatar && !background) {
        res.status(400).send({ message: "Submit at least one field for update" });
    }

    const { id, user } = req.id;

    await userService.updateService(
        id,
        name,
        username,
        email,
        password,
        avatar,
        background
    );

    res.send({ message: "User sucessfully updated" });

};

module.exports = { create, findAll, findById, update };

