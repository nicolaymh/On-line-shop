import { Router } from "express";

import verifyCategoryFields from "../middlewares/validate-category.js";

import * as categoryController from "../controllers/category.controller.js";
import checkAuth from "../middlewares/checkAuth.js";

const router = Router();

router.post("/create", checkAuth, verifyCategoryFields, categoryController.createCategory);
router.get("/get-categories", checkAuth, categoryController.getCategoriesInfo);
router.put("/update-category", checkAuth, verifyCategoryFields, categoryController.updateCategory);

export default router;
