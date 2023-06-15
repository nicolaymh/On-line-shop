import { name, description, price, category, subcategory } from "./validations.js";

import validateErrors from "../validateFields.js";

const validateFieldsCreateProduct = [
   name,
   price,
   description,
   category,
   subcategory,
   validateErrors,
];

export { validateFieldsCreateProduct };
