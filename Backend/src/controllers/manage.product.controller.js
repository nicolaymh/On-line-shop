import { v2 as cloudinary } from "cloudinary";

import internalServerError from "../helpers/internalServerError.js";

const addProduct = async (req, res) => {
   try {
      const { name, price, description, imgBase64, category, subcategory } = req.body;
      const uploadResult = await cloudinary.uploader.upload(imgBase64);

      console.log(uploadResult);
   } catch (error) {
      internalServerError(error, res);
   }
};

export { addProduct };
