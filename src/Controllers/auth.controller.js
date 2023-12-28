import bcrypt from 'bcrypt';
import { loginService } from '../sevices/auth.service.js';

const login = async (req, res) => {
    
    const { email, password } = req.body;

    try {
        
        const user = await loginService(email);

        if (!user) {
            return res.status(400).send({message: "User or password not is/are correct"})
        }

        const passwordIsValid = await bcrypt.compare(password, user.password)

        if (!passwordIsValid || !user) {
            return res.status(400).send({message: "User or password not is/are correct"})
        }

        res.send(user);
    } catch (err) { res.status(500).send({ message: err.message }) }
};

export { login };