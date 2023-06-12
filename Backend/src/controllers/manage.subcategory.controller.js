import User from "../models/UserModel.js";
import Category from "../models/CatagoryModel.js";
import Subcategory from "../models/SubcategoryModel.js";

import mapCategoriesSubcategories from "../helpers/mapCategories.js";

import internalServerError from "../helpers/internalServerError.js";

//* Create subcategory.
const createSubcategory = async (req, res) => {
   try {
      const { _id } = req.user;
      const { name, description, categoryId } = req.body;

      // Check if user is admin.
      const isAdmin = await User.findById({ _id }).populate("role").select("role");
      if (isAdmin.role.name !== "admin") {
         return res.status(400).json({ ok: false, msg: "Access denied" });
      }

      // Check if there is already a subcategory with the same name and same category.
      const nameExists = await Subcategory.where("name")
         .equals(name)
         .where("category")
         .equals(categoryId);

      if (nameExists[0]) {
         return res
            .status(400)
            .json({ ok: false, msg: "There is already a subcategory with this name" });
      }

      // Check if a category exists by its id ( categoryId ).
      const categoryExists = await Category.findById({ _id: categoryId });
      if (!categoryExists) {
         return res.status(400).json({ ok: false, msg: "Category does not exist" });
      }

      // Create a new subcategory.
      await Subcategory.create({ name, description, category: categoryId });

      // Getting the new categories and subcategories data map.
      const categoriesSubcategories = await mapCategoriesSubcategories();

      res.status(201).json({
         ok: true,
         msg: `${name} subcategory created successfully`,
         categoriesSubcategories,
      });
   } catch (error) {
      internalServerError(error, res);
   }
};

//* Get Subcategory Info
const getSubcategoryInfo = async (req, res) => {
   try {
      const { subcategoryId } = req.params;
      const { _id } = req.user;

      // Check if user is admin.
      const isAdmin = await User.findById({ _id }).populate("role").select("role");
      if (isAdmin.role.name !== "admin") {
         return res.status(400).json({ ok: false, msg: "Access denied" });
      }

      // Check if a subcategory exists by its id ( subcategoryId ).
      const subcategoryExists = await Subcategory.findById({ _id: subcategoryId }).select(
         "_id name description category"
      );
      if (!subcategoryExists) {
         return res.status(400).json({ ok: false, msg: "Subcategory does not exist" });
      }

      res.status(201).json({
         ok: true,
         msg: `Subcategory: ${subcategoryExists.name}`,
         subcategoryInfo: subcategoryExists,
      });
   } catch (error) {
      internalServerError(error, res);
   }
};

//* Edit Subcategory.
const editSubcategory = async (req, res) => {
   try {
      const { _id } = req.user;
      const { name, description, categoryId } = req.body;
      const { subcategoryId } = req.params;

      // Check if user is admin.
      const isAdmin = await User.findById({ _id }).populate("role").select("role");
      if (isAdmin.role.name !== "admin") {
         return res.status(400).json({ ok: false, msg: "Access denied" });
      }

      // Check if a category exists by its id ( categoryId ).
      const categoryExists = await Category.findById({ _id: categoryId });
      if (!categoryExists) {
         return res.status(400).json({ ok: false, msg: "Category does not exist" });
      }

      // Check if a subcategory exists by its id ( subcategoryId ).
      let subcategoryExists = await Subcategory.findById({ _id: subcategoryId });
      if (!subcategoryExists) {
         return res.status(400).json({ ok: false, msg: "Subcategory does not exist" });
      }

      // Modify info subcategory.
      subcategoryExists.name = name;
      subcategoryExists.description = description;
      subcategoryExists.category = categoryId;

      subcategoryExists = await subcategoryExists.save();

      res.status(201).json({
         ok: true,
         msg: "Subcategory info changed successfully",
         infoChanged: { _id: subcategoryId, name, description, category: categoryId },
      });
   } catch (error) {
      internalServerError(error, res);
   }
};

export { createSubcategory, editSubcategory, getSubcategoryInfo };
