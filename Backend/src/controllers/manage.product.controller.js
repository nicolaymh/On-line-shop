import internalServerError from "../helpers/internalServerError.js";

const addProduct = (req, res) => {
   try {
      console.log(req.body);
   } catch (error) {
      internalServerError(error, res);
   }
};

export { addProduct };
