import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import userService from '../sevices/user.service.js';

dotenv.config();

const authMiddleware = (req, res, next) => {

    const { authorization } = req.headers;

    try {
        if (!authorization) {
            return res.send(401);
        };

        const parts = authorization.split(" ");

        var tamanho = Object.keys(parts).length;

        if (tamanho !== 2) {
            return res.send(401);
        }

        const [schema, token] = parts;

        if (schema !== "Bearer") {
            return res.send(401);
        };

        jwt.verify(token, process.env.SECRETKEYJWT, async (error, decoded) => {
            if (error) {
                return res.status(401).send({ message: "Token Invalid!" })
            }

            const user = await userService.findByIdService(decoded.id);

            if (!user || !user.id) {
                return res.status(401).send({ message: "Token Invalid!" })
            }

            req.userId = user.id;

            return next();
        });

    } catch (err) { res.status(500).send({ message: err.message }) };
}

export { authMiddleware };
