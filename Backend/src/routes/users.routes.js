import { Router } from 'express';
import { register } from '../controllers/users.controller.js';

const router = Router();

router.get('/', register);

export default router;
