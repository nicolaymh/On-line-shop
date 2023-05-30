import mongoose from "mongoose";

import Category from "../models/CatagoryModel.js";
import Subcategory from "../models/SubcategoryModel.js";

import internalServerError from "../helpers/internalServerError.js";

const getcategories = async (req, res) => {
   try {
      const categories = await Category.find().select("_id name description").lean();
      const subcategories = await Subcategory.find().select("_id name description category").lean();

      const categoriesSubcategories = categories.map((cat) => {
         const subcategoryBelong = subcategories.filter((subcat) =>
            mongoose.Types.ObjectId(cat._id).equals(mongoose.Types.ObjectId(subcat.category))
         );

         return { ...cat, subcategories: subcategoryBelong };
      });

      res.status(201).json({ userInfo: { ...req.user }, categoriesSubcategories });
   } catch (error) {
      internalServerError(error, res);
   }
};

export { getcategories };
