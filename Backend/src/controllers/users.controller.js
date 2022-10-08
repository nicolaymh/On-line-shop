import bcrypt from 'bcryptjs';

import internalServerError from '../helpers/internalServerError.js';
import User from '../models/UserModel.js';

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        //? Repeated email check
        const emailExist = await User.findOne({ email });
        if (emailExist) {
            return res.status(400).json({
                ok: false,
                msg: `There is already a registered user with the email ${email}`,
            });
        }

        //? user creation model instance
        const userNew = new User(req.body);

        //? encrypt password before saving
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        //? save encrypted password
        userNew.password = hash;

        //? Save user in DB
        const userHash = await userNew.save();

        res.status(201).json({ ok: true, msg: 'Created user successfully', data: userHash });
    } catch (error) {
        internalServerError(error, res);
    }
};
