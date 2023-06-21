import Category from "../models/CatagoryModel.js";
import Subcategory from "../models/SubcategoryModel.js";
import Product from "../models/ProductModel.js";

import uploadResult from "../cloudinary/uploadImage.js";
import deleteImageCloudinary from "../cloudinary/deleteImage.js";
import deleteImageLocal from "../middlewares/multer/deleteImage.js";
import internalServerError from "../helpers/internalServerError.js";

const addProduct = async (req, res) => {
   try {
      const { user } = req;
      const { name, price, description, category, subcategory } = req.body;

      if (!req.file) {
         return res.status(400).json({ ok: false, msg: "A valid image is required" });
      }

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

      const newProduct = new Product({
         name,
         price,
         description,
         category,
         subcategory,
         image: {
            public_id: uploading.public_id,
            url: uploading.secure_url,
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

const editProduct = async (req, res) => {
   const { user } = req;
   const { productId } = req.params;
   const { name, price, description, category, subcategory, status } = req.body;

   if (user.role === "user") {
      deleteImageLocal(res);
      return res.status(400).json({ ok: false, msg: "Access denied" });
   }

   const findProduct = await Product.findById(productId);
   if (!findProduct) {
      return res.status(400).json({ ok: false, msg: "Product does not exist" });
   }

   let uploading = null;
   if (req.file) {
      const categoryName = await Category.findById({ _id: category });
      const subcategoryName = await Subcategory.findById({ _id: subcategory });
      const folderNames = {
         categoryFolderName: categoryName.name,
         subcategoryFolderName: subcategoryName.name,
      };

      const cloudinaryImgId = findProduct.image.public_id;
      const { result } = await deleteImageCloudinary(cloudinaryImgId, res);
      if (result !== "ok") {
         return res.status(400).json({ ok: false, msg: "Image to remove and replace not found" });
      }

      uploading = await uploadResult(folderNames, req, res);
      if (!uploading.public_id) return;

      // Path where the image will be saved in cloudinary.
      findProduct.image = {
         public_id: uploading.public_id,
         url: uploading.secure_url,
      };
   }

   // Edit info product
   findProduct.name = name;
   findProduct.price = price;
   findProduct.description = description;
   findProduct.category = category;
   findProduct.subcategory = subcategory;
   findProduct.status = status;

   // Mode image to another folder.
   /* Here +++++++++++++++++++++++++++ */

   const editedProduct = await findProduct.save();

   console.log(editedProduct);

   res.status(201).json({ ok: true, msg: "Product edited successfully" });
};

export { addProduct, editProduct };
