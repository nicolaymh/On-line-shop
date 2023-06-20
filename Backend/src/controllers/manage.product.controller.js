import Category from "../models/CatagoryModel.js";
import Subcategory from "../models/SubcategoryModel.js";
import Product from "../models/ProductModel.js";

import uploadResult from "../cloudinary/uploadImage.js";
import internalServerError from "../helpers/internalServerError.js";
import deleteImageLocal from "../middlewares/multer/deleteImage.js";

const addProduct = async (req, res) => {
   try {
      const { user } = req;
      const { name, price, description, category, subcategory } = req.body;

      if (user.role === "user") {
         deleteImageLocal(res);
         return res.status(400).json({ ok: false, msg: "Access denied" });
      }

      const categoryName = await Category.findById({ _id: category });
      const subcategoryName = await Subcategory.findById({ _id: subcategory });

      const folderNames = {
         categoryFolderName: categoryName.name,
         subcategoryFolderName: subcategoryName.name,
      };

      // Upload Image to cloudinary.
      const uploading = await uploadResult(folderNames, req, res);
      if (!uploading.public_id) return;

      const newProduct = new Product({
         name,
         price,
         description,
         category,
         subcategory,
         image: {
            public_id: uploading.public_id,
            url: uploading.secure_url,
            folder: uploading.folder,
         },
      });

      // Saving to DB.
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
