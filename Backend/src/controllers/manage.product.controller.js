import internalServerError from "../helpers/internalServerError.js";

const addProduct = (req, res) => {
   try {
      console.log("Hey!!!");
   } catch (error) {
      internalServerError(error, res);
   }
};

export { addProduct };
