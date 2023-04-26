import { Router } from "express";

import * as subcategoriesController from "../controllers/subcategories.controller.js";

const router = Router();

router.get("/get-categories", subcategoriesController.getSubcategories);

export default router;
