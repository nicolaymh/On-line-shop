import { validationResult } from "express-validator";

import internalServerError from "../../helpers/internalServerError.js";

const validateErrors = (req, res, next) => {
   try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
         console.log(errors);

         return res.status(400).json({
            ok: false,
            errors: errors.array(),
         });
      }

      next();
   } catch (error) {
      internalServerError(error, res);
   }
};

export default validateErrors;
