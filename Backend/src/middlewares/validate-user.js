import { check } from "express-validator";
import validateErrors from "../helpers/validateFields.js";

const register = [
  check("name", "Name is required").trim().notEmpty().toLowerCase(),
  check("email", "The email must be valid").trim().normalizeEmail().isEmail().toLowerCase(),
  check("password", "The password must be at least 6 characters").isLength({
    min: 6,
  }),
  check("address", "Address is required and min 8 characters ")
    .trim()
    .isLength({ min: 8 })
    .toLowerCase(),
  check("phone", "Phone is required and min 10 characters")
    .trim()
    .isLength({ min: 10 })
    .toLowerCase(),
  validateErrors,
];

const login = [
  check("email", "The email must be valid")
    .trim()
    .notEmpty()
    .normalizeEmail()
    .isEmail()
    .toLowerCase(),
  check("password", "Password is required").trim().notEmpty(),
  validateErrors,
];

const forgetPassword = [
  check("email", "The email must be valid")
    .trim()
    .notEmpty()
    .normalizeEmail()
    .isEmail()
    .toLowerCase(),
  validateErrors,
];

const newPassword = [
  check("password", "The password must be at least 6 characters").isLength({
    min: 6,
  }),
  validateErrors,
];

export { register, login, forgetPassword, newPassword };
