import { check } from "express-validator";
import validateErrors from "../helpers/validateFields.js";

const verifyCategoryFields = [
  check("name", "Name must be between 3 and 20 characters")
    .trim()
    .toLowerCase()
    .isLength({ min: 3, max: 30 }),
  check("description", "Write a description max 100 characters")
    .trim()
    .toLowerCase()
    .isLength({ min: 5, max: 100 }),
  validateErrors,
];

export default verifyCategoryFields;
