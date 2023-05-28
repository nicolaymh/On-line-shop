import { Router } from "express";

import { email } from "../middlewares/validate/validationsUser/validations.js";

import validateErrors from "../middlewares/validate/validateFields.js";

import * as manageUser from "../controllers/manage.user.controller.js";

import checkAuth from "../middlewares/auth/checkAuth.js";

import validateFieldsSubcategory from "../middlewares/validate/validateSubcategories/validate-subcategory.js";

const router = Router();

// Using express-validator to validate email.
const validateEmail = [email, validateErrors];

// Routes to manage user.
router.get("/user/:email", validateEmail, checkAuth, manageUser.manageUser);
router.put("/user/change-role", checkAuth, manageUser.manageRole);

// Routes to manage subcategory.
router.post("/subcategory/create-subcategory", checkAuth, validateFieldsSubcategory, (req, res) => {
   console.log("From create-subcategory");
   console.log(req.body);

   res.json(req.body);
});

export default router;
