import { v2 as cloudinary } from "cloudinary";

import deleteImageLocal from "../middlewares/multer/deleteImage.js";

const uploadResult = async (req, res) => {
   try {
      const { file } = req;

      const uploading = await cloudinary.uploader.upload(
         `./src/middlewares/multer/uploads/${file.filename}`,
         {
            folder: `gamer_store/`,
            use_filename: true,
            format: "jpg",
         }
      );

      deleteImageLocal(res);

      return uploading;
   } catch (error) {
      console.log(error);
      deleteImageLocal(res);
      return res.status(error.http_code).json({ ok: false, msg: error.message });
   }
};

export default uploadResult;
