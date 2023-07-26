import Product from "../models/ProductModel.js";
import Category from "../models/CatagoryModel.js";
import Subcategory from "../models/SubcategoryModel.js";

import uploadResult from "../cloudinary/uploadImage.js";
import deleteImageCloudinary from "../cloudinary/deleteImage.js";
import deleteImageLocal from "../middlewares/multer/deleteImage.js";
import internalServerError from "../helpers/internalServerError.js";

import { getAllProductsInfo } from "../helpers/products/getAllProductsInfo.js";

const getProducts = async (_, res) => {
   try {
      const products = await getAllProductsInfo();

      res.status(200).json({ ok: true, products });
   } catch (error) {
      internalServerError(error, res);
   }
};

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

      //* Check if category and subcategory exist.
      if (!(await Category.findById({ _id: category }))) {
         return res.status(400).json({ ok: false, msg: "Category does not exist" });
      }
      if (!(await Subcategory.findById({ _id: subcategory }))) {
         return res.status(400).json({ ok: false, msg: "Subcategory does not exist" });
      }

      //* Upload Image to cloudinary.
      const uploading = await uploadResult(req, res);

      //* Create product.
      const newProduct = await Product.create({
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

      const products = await getAllProductsInfo();

      res.status(201).json({
         ok: true,
         msg: `The product ${newProduct.name} has been created successfully`,
         products,
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

      //* Check if user has permissions.
      if (user.role === "user") {
         deleteImageLocal(res);
         return res.status(400).json({ ok: false, msg: "Access denied" });
      }

      //* Check if product exists.
      const findProduct = await Product.findById(productId);
      if (!findProduct) {
         return res.status(400).json({ ok: false, msg: "Product does not exist" });
      }

      //* Check if category and subcategory exist.
      if (!(await Category.findById({ _id: category }))) {
         return res.status(400).json({ ok: false, msg: "Category does not exist" });
      }
      if (!(await Subcategory.findById({ _id: subcategory }))) {
         return res.status(400).json({ ok: false, msg: "Subcategory does not exist" });
      }

      //* If an image was not submitted when editing the product info, no image will be uploaded to Cloudinary.
      if (req.file) {
         //* Delete current image in cloudinary to update by another.
         const cloudinaryImgId = findProduct.image.public_id;
         const { result } = await deleteImageCloudinary(cloudinaryImgId, res);
         if (result !== "ok") {
            return res
               .status(400)
               .json({ ok: false, msg: "Image to remove and replace not found" });
         }

         //* Save new image in cloudinary.
         const uploading = await uploadResult(req, res);
         if (!uploading.public_id) return;

         //* Update image info in DB.
         findProduct.image = {
            public_id: uploading.public_id,
            url: uploading.secure_url,
         };
      }

      //* Edit info product.
      findProduct.name = name;
      findProduct.price = price;
      findProduct.description = description;
      findProduct.category = category;
      findProduct.subcategory = subcategory;
      findProduct.status = status;

      //* Edit in DB.
      const editedProduct = await findProduct.save();

      console.log(editedProduct);

      const products = await getAllProductsInfo();

      res.status(201).json({ ok: true, msg: "Product edited successfully", products });
   } catch (error) {
      console.log(error);
      internalServerError(error, res);
   }
};

export { getProducts, addProduct, editProduct };
