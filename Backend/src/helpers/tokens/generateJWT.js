import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const generateJWT = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

export default generateJWT;
