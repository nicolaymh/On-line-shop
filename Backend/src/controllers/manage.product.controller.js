import uploadResult from "../cloudinary/uploadImage.js";

import internalServerError from "../helpers/internalServerError.js";

import deleteImageLocal from "../middlewares/multer/deleteImage.js";

const addProduct = async (req, res) => {
   try {
      const { name, price, description, category, subcategory } = req.body;

      // Upload Image.
      const uploading = await uploadResult(req, res);

      if (!uploading.public_id) return;

      console.log(uploading);

      deleteImageLocal(res);
   } catch (error) {
      deleteImageLocal(res);
      internalServerError(error, res);
   }
};

export { addProduct };
