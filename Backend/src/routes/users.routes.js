import { Router } from 'express';
import { register } from '../controllers/users.controller.js';

const router = Router();

router.get('/', register, (req, res) => {
    res.json({
        name: 'Nicolay',
        type: 'user',
    });
});

export default router;
