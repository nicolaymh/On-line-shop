import bcrypt from 'bcryptjs';

import User from '../models/UserModel.js';

import internalServerError from '../helpers/internalServerError.js';
import generateTokenUnique from '../helpers/tokens/generateTokenUnique.js';
import generateJWT from '../helpers/tokens/generateJWT.js';

import { sendEmailForgetPass, sendEmailRegister } from '../helpers/email/emailSending.js';

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Repeated email check
        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return res.status(400).json({ ok: false, msg: 'There is already a registered user with this email', email });
        }

        // user creation model instance
        const userNew = new User(req.body);

        // encrypt password before saving
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        // save encrypted password
        userNew.password = hash;

        // Generating and saving one time use token
        userNew.token = generateTokenUnique();

        // Save user in DB
        await userNew.save();

        // Send confirmation email
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

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userLogin = await User.findOne({ email });
        if (!userLogin) return res.status(400).json({ ok: false, msg: 'Wrong email or password!' });
        if (!userLogin.confirmed) return res.status(400).json({ ok: false, msg: 'This account has not beeen confirmed', email });

        const verifyPassword = await userLogin.comparePassword(password);
        if (!verifyPassword) return res.status(400).json({ ok: false, msg: 'Wrong email or password!' });

        const { _id, name } = userLogin;

        // Generate token
        const token = await generateJWT(_id, name);
        res.status(400).json({ _id, name, token });
    } catch (error) {
        internalServerError(error, res);
    }
};

export const restorePassword = async (req, res) => {
    try {
        const { email } = req.body;

        const userRestore = await User.findOne({ email });
        if (!userRestore) return res.status(400).json({ ok: false, msg: 'User does not exist' });

        userRestore.token = generateTokenUnique();
        const user = await userRestore.save();
        res.status(201).json({ ok: true, msg: 'Check your email to restore password' });

        // Send forget-password email
        sendEmailForgetPass(user);
    } catch (error) {
        internalServerError(error, res);
    }
};
