import { Router } from "express";
import checkAuth from "../middlewares/checkAuth.js";
import * as manage from "../controllers/manage.controller.js";

const router = Router();

router.get("/user", checkAuth, manage.manageUser);

export default router;
