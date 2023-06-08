import { check } from "express-validator";

const name = check("name", "Subcategory name is required")
   .trim()
   .toLowerCase()
   .isLength({ min: 3 });

const description = check("description", "Type a description between 5 to 50 characters")
   .trim()
   .toLowerCase()
   .isLength({ min: 5, max: 50 });

const categoryId = check("categoryId", "Choose a category").trim().notEmpty();

export { name, description, categoryId };
