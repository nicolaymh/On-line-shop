import { v2 as cloudinary } from "cloudinary";
import internalServerError from "../helpers/internalServerError.js";

const deleteImageCloudinary = async (cloudinaryImgId = "", res) => {
   try {
      const deleteImg = await cloudinary.uploader.destroy(cloudinaryImgId);

      return deleteImg;
   } catch (error) {
      console.log(error);
      internalServerError(error, res);
   }
};

export default deleteImageCloudinary;
