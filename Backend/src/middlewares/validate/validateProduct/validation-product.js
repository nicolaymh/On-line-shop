import { name, description, price, category, subcategory, status } from "./validations.js";

import validateErrors from "../validateFields.js";

const validateFieldsCreate = [name, price, description, category, subcategory, validateErrors];

const validateFieldsEdit = [
   name,
   price,
   description,
   category,
   subcategory,
   status,
   validateErrors,
];

export { validateFieldsCreate, validateFieldsEdit };
