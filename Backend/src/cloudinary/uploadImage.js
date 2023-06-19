import { v2 as cloudinary } from "cloudinary";

import deleteImageLocal from "../middlewares/multer/deleteImage.js";

const uploadResult = async (request, response) => {
   try {
      const uploading = await cloudinary.uploader.upload(
         `./src/middlewares/multer/uploads/${request.file.filename}`,
         {
            public_id: request.file.filename,
         }
      );

      return uploading;
   } catch (error) {
      console.log(error);
      deleteImageLocal(response);
      return response.status(error.http_code).json({ ok: false, msg: error.message });
   }
};

export default uploadResult;
