import { Router } from "express";

import * as subcategoriesController from "../controllers/subcategories.controller.js";
import checkAuth from "../middlewares/auth/checkAuth.js";

const router = Router();

router.get("/get-subcategories", subcategoriesController.getSubcategories);
router.post("/create-subcategory/:category", checkAuth, subcategoriesController.createSubcategory);

export default router;
