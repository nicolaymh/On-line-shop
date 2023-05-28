import { description, name } from "./validations.js";

import validateErrors from "../validateFields.js";

const validateFieldsSubcategory = [name, description, validateErrors];

export default validateFieldsSubcategory;
