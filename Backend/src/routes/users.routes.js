import { Router } from 'express';

import * as validateFields from '../middlewares/validate-user.js';

import * as userController from '../controllers/users.controller.js';

const router = Router();

router.post('/register', validateFields.validateRegister, userController.register);
router.put('/confirm/:token', userController.confirmAccount);
router.get('/login', validateFields.validateLogin, userController.login);

export default router;
