import { validationResult } from 'express-validator';

import internalServerError from './internalServerError.js';

const validateFields = (req, res, next) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log(errors);

            return res.status(400).json({
                ok: false,
                errors: errors.mapped(),
            });
        }

        next();
    } catch (error) {
        internalServerError(error, res);
    }
};

export default validateFields;
