import { check } from 'express-validator';
import validateErrors from '../helpers/validateFields.js';

export const register = [
    check('name', 'name is required').trim().notEmpty().toLowerCase(),
    check('email', 'The email must be valid').trim().normalizeEmail().isEmail().toLowerCase(),
    check('password', 'The password must be at least 6 characters').isLength({ min: 6 }).toLowerCase(),
    check('address', 'address is required and min 8 characters ').trim().isLength({ min: 8 }).toLowerCase(),
    check('phone', 'phone is required and min 10 characters').trim().isLength({ min: 10 }).toLowerCase(),
    validateErrors,
];

export const login = [
    check('email', 'The email must be valid').trim().notEmpty().normalizeEmail().isEmail().toLowerCase(),
    check('password', 'Password is required').trim().notEmpty().toLowerCase(),
    validateErrors,
];

export const forgetPassword = [check('email', 'The email must be valid').trim().notEmpty().normalizeEmail().isEmail().toLowerCase(), validateErrors];
