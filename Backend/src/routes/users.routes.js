import { Router } from 'express';
import { check } from 'express-validator';

import * as validateFields from '../middlewares/validate-user.js';

import * as userController from '../controllers/users.controller.js';

const router = Router();

router.post('/', validateFields.validateRegister, userController.register);

export default router;
