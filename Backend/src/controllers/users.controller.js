import { Kitten } from '../models/user.model.js';

export const register = async (req, res, next) => {
    const silence = new Kitten({ name: 'Silence' });

    console.log(silence);

    silence.speak();

    next();
};
