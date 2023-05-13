import { name, createPassword, password, email, address, phone } from "./validations-user.js";

import validateErrors from "./validateFields.js";

/* These are arrays that contain functions or variables that are used for validating user input in
different scenarios. */
const register = [name, createPassword, email, address, phone, validateErrors];
const login = [email, password, validateErrors];
const forgetPassword = [email, validateErrors];
const newPassword = [createPassword, validateErrors];
const editInfo = [name, password, email, address, phone, validateErrors];

export { register, login, forgetPassword, newPassword, editInfo };
