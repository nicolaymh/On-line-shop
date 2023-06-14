import { check } from "express-validator";

const name = check("name")
   .trim()
   .toLowerCase()
   .isLength({ min: 4 })
   .withMessage("Product name must be a minimum of 4 characters ");

const price = check("price")
   .notEmpty()
   .withMessage("Product price is required")
   .isNumeric()
   .withMessage("Product price must be a number")
   .toFloat()
   .isFloat({ min: 0 })
   .withMessage("Product price must be a positive number");

const description = check("description")
   .trim()
   .toLowerCase()
   .notEmpty()
   .withMessage("Product description is required")
   .isLength({ min: 8, max: 50 })
   .withMessage("Description must be between 8 and 50 characters");

export { name, price };
