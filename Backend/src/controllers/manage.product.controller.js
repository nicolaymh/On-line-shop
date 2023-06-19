import { v2 as cloudinary } from "cloudinary";

import internalServerError from "../helpers/internalServerError.js";

import deleteImageLocal from "../middlewares/multer/deleteImage.js";

const addProduct = async (req, res) => {
   try {
      const { name, price, description, category, subcategory } = req.body;

      console.log(req.file);

      console.log(req.user);

      setTimeout(() => {
         deleteImageLocal(res);
         console.log("deleted");
      }, 5000);

      console.log("Hey!!");
   } catch (error) {
      internalServerError(error, res);
   }
};

export { addProduct };
