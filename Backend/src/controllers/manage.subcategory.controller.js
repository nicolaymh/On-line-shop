import User from "../models/UserModel.js";
import Category from "../models/CatagoryModel.js";
import Subcategory from "../models/SubcategoryModel.js";

import mapCategoriesSubcategories from "../helpers/mapCategories.js";

import internalServerError from "../helpers/internalServerError.js";

/**
 //* Create subcategory.
 * This function creates a new subcategory and performs various checks to ensure that the subcategory
 * does not already exist and that the user creating it is an admin.
 * @returns a response object with a status code and a JSON object containing a message and data. The
 * status code and message depend on the outcome of the function's logic. If the function is
 * successful, it returns a 201 status code with a message indicating that the subcategory was created
 * successfully, along with a data object containing the updated categories and subcategories map. If
 * there is an error
 */
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

/**
 //* Edit Subcategory.
 * This function edits the information of a subcategory and returns a response with the updated
 * categories and subcategories data map.
 * @returns a JSON response with the following properties:
 * - "ok": a boolean indicating whether the operation was successful or not.
 * - "msg": a message describing the result of the operation.
 * - "categoriesSubcategories": an object containing the updated categories and subcategories data map.
 */
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

      // Getting the new categories and subcategories data map.
      const categoriesSubcategories = await mapCategoriesSubcategories();

      res.status(201).json({
         ok: true,
         msg: "Subcategory info changed successfully",
         categoriesSubcategories,
      });
   } catch (error) {
      internalServerError(error, res);
   }
};

export { createSubcategory, editSubcategory };
