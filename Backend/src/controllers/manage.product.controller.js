import Category from "../models/CatagoryModel.js";
import Subcategory from "../models/SubcategoryModel.js";
import Product from "../models/ProductModel.js";

import uploadResult from "../cloudinary/uploadImage.js";
import internalServerError from "../helpers/internalServerError.js";
import deleteImageLocal from "../middlewares/multer/deleteImage.js";

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

      const newProduct = new Product({ name, price, description, category, subcategory });
      newProduct.image.public_id = uploading.public_id;
      newProduct.image.url = uploading.secure_url;
      newProduct.image.folder = uploading.folder;

      const createdProduct = await newProduct.save();

      res.status(201).json({
         ok: true,
         msg: `The product ${createdProduct.name} has been created successfully`,
      });
   } catch (error) {
      deleteImageLocal(res);
      internalServerError(error, res);
   }
};

export { addProduct };
