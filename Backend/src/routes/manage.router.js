import { Router } from "express";

import { email } from "../middlewares/validate/validationsUser/validations.js";

import validateErrors from "../middlewares/validate/validateFields.js";

import * as manage from "../controllers/manage.controller.js";

import checkAuth from "../middlewares/auth/checkAuth.js";

const router = Router();

// Using express-validator to validate email.
const validateEmail = [email, validateErrors];

router.get("/user/:email", validateEmail, checkAuth, manage.manageUser);
router.post("/user/change-role", checkAuth, manage.manageRole);

export default router;
