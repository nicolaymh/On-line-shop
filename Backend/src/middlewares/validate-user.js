import { check } from 'express-validator';
import validateFields from '../helpers/validateFields.js';

export const validateRegister = [
    check('name', 'name is required').notEmpty().trim(),
    check('email', 'The email must be valid').isEmail().trim(),
    check('password', 'The password must be at least 6 characters').isLength({ min: 6 }),
    check('address', 'address is required and min 8 characters ').trim().isLength({ min: 8 }),
    check('phone', 'phone is required and min 10 characters').trim().isLength({ min: 10 }),
    validateFields,
];
