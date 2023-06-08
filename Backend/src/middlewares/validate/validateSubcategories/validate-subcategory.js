import { categoryId, description, name } from "./validations.js";

import validateErrors from "../validateFields.js";

const validateFieldsSubcategory = [name, description, categoryId, validateErrors];

export default validateFieldsSubcategory;
