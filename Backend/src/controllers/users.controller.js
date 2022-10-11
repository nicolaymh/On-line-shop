import bcrypt from 'bcryptjs';

import User from '../models/UserModel.js';

import internalServerError from '../helpers/internalServerError.js';
import generateTokenUnique from '../helpers/generateTokenUnique.js';

import { sendEmailRegister } from '../helpers/emailSending.js';

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //? Repeated email check
        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return res.status(400).json({
                ok: false,
                msg: 'There is already a registered user with this email',
                email: `${email}`,
            });
        }

        //? user creation model instance
        const userNew = new User(req.body);

        //? encrypt password before saving
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        //? save encrypted password
        userNew.password = hash;

        //? Generating and saving one time use token
        userNew.token = generateTokenUnique();

        //? Save user in DB
        await userNew.save();

        //? Send confirmation email
        sendEmailRegister({ name, email, token: userNew.token });

        res.status(201).json({ ok: true, msg: 'User created successfully, check your email to confirm the account' });
    } catch (error) {
        internalServerError(error, res);
    }
};

export const confirmAccount = async (req, res) => {
    try {
        const token = req.params;
        const userExists = await User.findOne(token);

        if (!userExists) {
            return res.status(400).json({ ok: false, msg: 'invalid token' });
        }

        userExists.token = '';
        userExists.confirmed = true;
        await userExists.save();
        res.status(201).json({ ok: true, msg: 'User confirmed successfully' });
    } catch (error) {
        internalServerError(error, res);
    }
};
