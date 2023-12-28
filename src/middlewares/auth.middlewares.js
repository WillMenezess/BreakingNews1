import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

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

        jwt.verify(token, process.env.SECRETKEYJWT, (error, decoded) => {
            console.log(error);
            console.log(decoded); 
        });

        
        next();
    } catch (err) { res.status(500).send({ message: err.message }) };
}

export { authMiddleware };
