import { Router } from "express";

import * as categoriesController from "../controllers/categories.controller.js";

import checkAuth from "../middlewares/checkAuth.js";

const router = Router();

router.get("/get-categories", checkAuth, categoriesController.getcategories);

export default router;
