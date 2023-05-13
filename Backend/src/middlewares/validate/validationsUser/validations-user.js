import { check } from "express-validator";

/* This code is defining a set of validation rules using the `check` function from the
`express-validator` library. Each rule is assigned to a constant variable with a descriptive name,
such as `name`, `email`, `password`, etc. Each rule specifies a field to validate (e.g. "name",
"email", "password", etc.) and a validation message to display if the validation fails. The rules
also specify various validation methods, such as `trim()` to remove whitespace, `notEmpty()` to
ensure the field is not empty, `isEmail()` to ensure the email is valid, `isLength()` to ensure the
field has a minimum length, and `toLowerCase()` to convert the field to lowercase. These rules can
be used to validate user input in a web application. */
const name = check("name", "Name is required").trim().notEmpty().toLowerCase();
const email = check("email", "The email must be valid").trim().isEmail().toLowerCase();
const password = check("password", "Password is required").trim().notEmpty();
const createPassword = check("password", "The password must be at least 6 characters").isLength({
   min: 6,
});
const address = check("address", "Address is required and min 8 characters ")
   .trim()
   .isLength({ min: 8 })
   .toLowerCase();
const phone = check("phone", "Phone is required and min 10 characters")
   .trim()
   .isLength({ min: 10 })
   .toLowerCase();

export { name, email, createPassword, password, address, phone };
