import { v2 as cloudinary } from "cloudinary";

import internalServerError from "../helpers/internalServerError.js";

const addProduct = async (req, res) => {
   try {
      const { name, price, description, category, subcategory } = req.body;
   } catch (error) {
      internalServerError(error, res);
   }
};

export { addProduct };
