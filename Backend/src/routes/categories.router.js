import { Router } from "express";

import checkAuth from "../middlewares/auth/checkAuth.js";

import * as categoriesController from "../controllers/categories.controller.js";

const router = Router();

router.get("/get-categories", checkAuth, categoriesController.getcategories);

export default router;
