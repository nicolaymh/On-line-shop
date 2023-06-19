import { v2 as cloudinary } from "cloudinary";

import internalServerError from "../helpers/internalServerError.js";

import deleteImageLocal from "../middlewares/multer/deleteImage.js";

const addProduct = async (req, res) => {
   try {
      const { name, price, description, category, subcategory } = req.body;

      console.log(req.file);

      const uploadResult = await cloudinary.uploader.upload(
         `./src/middlewares/multer/uploads/${req.file.filename}`
      );

      console.log(uploadResult);

      // deleteImageLocal(res);
   } catch (error) {
      internalServerError(error, res);
   }
};

export { addProduct };
