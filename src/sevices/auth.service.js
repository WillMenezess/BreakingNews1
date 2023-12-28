import User from '../models/User.model.js';
import jwt from 'jsonwebtoken';

const loginService = (email) => User.findOne({ email: email }).select("+password");

const generateToken = (id) => jwt.sign({id: id}, process.env.SECRETKEYJWT, {expiresIn: 86400});

export { loginService, generateToken };