import { Router } from "express";

import * as validateFields from "../middlewares/validate/validate-user.js";

import * as userController from "../controllers/users.controller.js";

import checkAuth from "../middlewares/checkAuth.js";

import renewToken from "../middlewares/renewToken.js";

const router = Router();

// Authentication
router.post("/register", validateFields.register, userController.register);
router.post("/login", validateFields.login, userController.login);
router.put("/confirm/:token", userController.confirmAccount);
router.post("/forget-password", validateFields.forgetPassword, userController.restorePassword);
router.put("/edit-info", checkAuth, validateFields.editInfo, userController.editInfoUser);
router
   .route("/forget-password/:token")
   .get(userController.checkToken)
   .post(validateFields.newPassword, userController.newPassword);

router.get("/profile", checkAuth, userController.profile);
router.get("/renew-token/:token", renewToken);

export default router;
