import { Router } from "express";

import * as subcategoriesController from "../controllers/subcategories.controller.js";

const router = Router();

router.get("/get-subcategories", subcategoriesController.getSubcategories);
router.post("/create-subcategory/:category", subcategoriesController.createSubcategory);

export default router;
