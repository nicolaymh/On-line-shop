import { Router } from "express";

import * as subcategoriesController from "../controllers/subcategories.controller.js";
import checkAuth from "../middlewares/auth/checkAuth.js";
import validateFieldsSubcategory from "../middlewares/validate/validateSubcategories/validate-subcategory.js";

const router = Router();

router.get("/get-subcategories", subcategoriesController.getSubcategories);
router.post(
   "/create-subcategory/:category",
   checkAuth,
   validateFieldsSubcategory,
   subcategoriesController.createSubcategory
);

export default router;
