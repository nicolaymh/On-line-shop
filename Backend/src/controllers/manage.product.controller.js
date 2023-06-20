import Product from "../models/ProductModel.js";

import uploadResult from "../cloudinary/uploadImage.js";
import internalServerError from "../helpers/internalServerError.js";
import deleteImageLocal from "../middlewares/multer/deleteImage.js";
import Category from "../models/CatagoryModel.js";
import Subcategory from "../models/SubcategoryModel.js";

const addProduct = async (req, res) => {
   try {
      const { name, price, description, category, subcategory } = req.body;

      const categoryName = await Category.findById({ _id: category });
      const subcategoryName = await Subcategory.findById({ _id: subcategory });

      const folderNames = {
         categoryFolderName: categoryName.name,
         subcategoryFolderName: subcategoryName.name,
      };

      // Upload Image.
      const uploading = await uploadResult(folderNames, req, res);

      if (!uploading.public_id) return;

      console.log(uploading);

      deleteImageLocal(res);
   } catch (error) {
      deleteImageLocal(res);
      internalServerError(error, res);
   }
};

export { addProduct };
