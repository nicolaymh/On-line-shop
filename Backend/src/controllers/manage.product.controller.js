import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";

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

      // Create product.
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

const editProduct = async (req, res) => {
   try {
      const { user } = req;
      const { productId } = req.params;
      const { name, price, description, category, subcategory, status } = req.body;

      // Check if user has permissions.
      if (user.role === "user") {
         deleteImageLocal(res);
         return res.status(400).json({ ok: false, msg: "Access denied" });
      }

      // Check if product exists.
      const findProduct = await Product.findById(productId);
      if (!findProduct) {
         return res.status(400).json({ ok: false, msg: "Product does not exist" });
      }

      // Create folder names for cloudinary.
      const categoryName = await Category.findById({ _id: category });
      const subcategoryName = await Subcategory.findById({ _id: subcategory });
      const folderNames = {
         categoryFolderName: categoryName.name,
         subcategoryFolderName: subcategoryName.name,
      };

      // If an image was not sent when editing the product information, do not upload any to cloudinary.
      let uploading = null;
      if (req.file) {
         const cloudinaryImgId = findProduct.image.public_id;

         //* Delete current image in cloudinary to update by another.
         const { result } = await deleteImageCloudinary(cloudinaryImgId, res);
         if (result !== "ok") {
            return res
               .status(400)
               .json({ ok: false, msg: "Image to remove and replace not found" });
         }

         //* Save new image in cloudinary.
         uploading = await uploadResult(folderNames, req, res);
         if (!uploading.public_id) return;

         //* Path where the image will be saved in cloudinary.
         findProduct.image = {
            public_id: uploading.public_id,
            url: uploading.secure_url,
            folder: uploading.folder,
         };
      }

      // Change image path in coludinary ( folder ), if the category or subcategory has been changed.
      if (
         !mongoose.Types.ObjectId(category).equals(mongoose.Types.ObjectId(findProduct.category)) ||
         !mongoose.Types.ObjectId(subcategory).equals(
            mongoose.Types.ObjectId(findProduct.subcategory)
         )
      ) {
         const { categoryFolderName, subcategoryFolderName } = folderNames;

         //* If category folder name does not exist, create it.
         const productFolderExist = await cloudinary.api.sub_folders("gamer_store");
         if (!productFolderExist.folders.find((f) => f.name === categoryFolderName)) {
            await cloudinary.api.create_folder(`gamer_store/${categoryFolderName}`);
         }

         //* If subcategory folder name does not exist, create it.
         const subcategoryFolderExist = await cloudinary.api.sub_folders(
            `gamer_store/${categoryFolderName}`
         );
         if (!subcategoryFolderExist.folders.find((f) => f.name === subcategoryFolderName)) {
            await cloudinary.api.create_folder(
               `gamer_store/${categoryFolderName}/${subcategoryFolderName}`
            );
         }

         //* Move image to another folder.
         const moveImageCloudinary = await cloudinary.uploader.rename(
            findProduct.image.public_id,
            `gamer_store/${categoryFolderName}/${subcategoryFolderName}/${findProduct.name}`
         );

         //* Update image info in DB.
         findProduct.image = {
            public_id: moveImageCloudinary.public_id,
            url: moveImageCloudinary.secure_url,
            folder: moveImageCloudinary.folder,
         };
      }

      // Edit info product.
      findProduct.name = name;
      findProduct.price = price;
      findProduct.description = description;
      findProduct.category = category;
      findProduct.subcategory = subcategory;
      findProduct.status = status;

      const editedProduct = await findProduct.save();

      console.log(editedProduct);

      res.status(201).json({ ok: true, msg: "Product edited successfully" });
   } catch (error) {
      console.log(error);
      internalServerError(error, res);
   }
};

export { addProduct, editProduct };
