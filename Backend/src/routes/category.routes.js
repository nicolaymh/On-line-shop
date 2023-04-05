import { Router } from "express";

import verifyCategoryFields from "../middlewares/validate-category.js";

import * as categoryController from "../controllers/category.controller.js";
import checkAuth from "../middlewares/checkAuth.js";

const router = Router();

router.post("/create", checkAuth, verifyCategoryFields, categoryController.createCategory);
router.get("/get-categories-info");
router.put("/update-category", verifyCategoryFields, categoryController.updateCategory);

export default router;
