import mongoose from "mongoose";

import Category from "../models/CatagoryModel.js";
import Subcategory from "../models/SubcategoryModel.js";

import internalServerError from "./internalServerError.js";

const mapCategoriesSubcategories = async () => {
   try {
      const categories = await Category.find().select("_id name description").lean();
      const subcategories = await Subcategory.find().select("_id name description category").lean();

      const mapCategoriesSubcategories = categories.map((cat) => {
         const subcategoryBelong = subcategories.filter((subcat) =>
            mongoose.Types.ObjectId(cat._id).equals(mongoose.Types.ObjectId(subcat.category))
         );

         return { ...cat, subcategories: subcategoryBelong };
      });

      return mapCategoriesSubcategories;
   } catch (error) {
      internalServerError(error, res);
   }
};

export default mapCategoriesSubcategories;
