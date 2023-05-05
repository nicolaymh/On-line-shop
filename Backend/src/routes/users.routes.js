import { Router } from "express";

import * as validateFields from "../middlewares/validate-user.js";

import * as userController from "../controllers/users.controller.js";

import checkAuth from "../middlewares/checkAuth.js";

const router = Router();

router.post("/register", validateFields.register, userController.register);
router.post("/login", validateFields.login, userController.login);
router.put("/confirm/:token", userController.confirmAccount);
router.post("/forget-password", validateFields.forgetPassword, userController.restorePassword);
router
  .route("/forget-password/:token")
  .get(userController.checkToken)
  .post(validateFields.newPassword, userController.newPassword);

router.post("/edit-info", checkAuth, validateFields.editInfoUser, userController.editInfoUser);

router.get("/profile", checkAuth, userController.profile);

export default router;
