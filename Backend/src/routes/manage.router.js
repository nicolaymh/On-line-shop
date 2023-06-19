import { Router } from "express";

import { email } from "../middlewares/validate/validationsUser/validations.js";

import validateErrors from "../middlewares/validate/validateFields.js";

import * as manageUser from "../controllers/manage.user.controller.js";
import * as manageSubcategory from "../controllers/manage.subcategory.controller.js";
import * as manageProduct from "../controllers/manage.product.controller.js";

import checkAuth from "../middlewares/auth/checkAuth.js";

// Express Validator.
import validateFieldsSubcategory from "../middlewares/validate/validateSubcategories/validate-subcategory.js";
import * as validateFieldsProduct from "../middlewares/validate/validateProduct/validation-product.js";
const validateEmail = [email, validateErrors];

// Image handling.
import multerHandler from "../middlewares/multer/config.js";

const router = Router();

//* Routes to manage user.
router.get("/user/:email", validateEmail, checkAuth, manageUser.manageUser);
router.put("/user/change-role", checkAuth, manageUser.manageRole);

//* Routes to manage subcategory.
router.post(
   "/subcategory/create-subcategory",
   checkAuth,
   validateFieldsSubcategory,
   manageSubcategory.createSubcategory
);
router.put(
   "/subcategory/edit-subcategory/:subcategoryId",
   checkAuth,
   validateFieldsSubcategory,
   manageSubcategory.editSubcategory
);

//* Routes to manage product.
router.post(
   "/product/create-product",
   checkAuth,
   multerHandler,
   // validateFieldsProduct.validateFieldsCreateProduct,
   manageProduct.addProduct
);

export default router;
