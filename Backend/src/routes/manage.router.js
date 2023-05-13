import { Router } from "express";

import * as manage from "../controllers/manage.controller.js";

const router = Router();

router.get("/user", manage.manageUser);

export default router;
