import { Router } from "express";
import { forgetPassword as validateEmail } from "../middlewares/validate/validationsUser/validate-user.js";
import checkAuth from "../middlewares/auth/checkAuth.js";
import * as manage from "../controllers/manage.controller.js";

const router = Router();

router.get("/user/:email", validateEmail, checkAuth, manage.manageUser);

export default router;
