import { Router } from "express";

import * as validateFields from "../middlewares/validate-category.js";

import * as categoryController from "../controllers/category.controller.js";

const router = Router();

router.post("/create", validateFields.create, categoryController.createCategory);

export default router;
