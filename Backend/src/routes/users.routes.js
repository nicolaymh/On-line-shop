import { Router } from 'express';

import * as userController from '../controllers/users.controller.js';

const router = Router();

router.post('/', userController.register);

export default router;
