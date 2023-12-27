import User from '../models/User.model.js';

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (
    id,
    name,
    username,
    password,
    email,
    avatar,
    background
) => User.findOneAndUpdate({ _id: id },
    { name, username, password, email, avatar, background });

export default {
    createService,
    findAllService,
    findByIdService,
    updateService,
}