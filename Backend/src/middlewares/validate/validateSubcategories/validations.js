import { check } from "express-validator";

const name = check("name", "Subcategory name is required")
   .trim()
   .notEmpty()
   .toLowerCase()
   .isLength({ min: 3 });

const description = check("description", "Write a description max 100 characters")
   .trim()
   .toLowerCase()
   .isLength({ min: 5, max: 100 });

export { name, description };
