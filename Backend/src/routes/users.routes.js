import { Router } from 'express';

import * as validateFields from '../middlewares/validate-user.js';

import * as userController from '../controllers/users.controller.js';

const router = Router();

router.post('/register', validateFields.register, userController.register);
router.put('/confirm/:token', userController.confirmAccount);
router.get('/login', validateFields.login, userController.login);
router.post('/forget-password', validateFields.forgetPassword, userController.restorePassword);
router.route('/forget-password/:token').get(userController.checkToken).post(validateFields.newPassword, userController.newPassword);

export default router;
