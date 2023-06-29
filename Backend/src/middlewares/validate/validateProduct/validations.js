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
   .isLength({ min: 8, max: 200 })
   .withMessage("Product description must be between 8 and 200 characters");

const category = check("category").isMongoId().withMessage("Category id must be valid");

const subcategory = check("subcategory").isMongoId().withMessage("Subcategory id must be valid");

const status = check("status").isBoolean();

export { name, price, description, category, subcategory, status };
