import User from "../models/UserModel.js";
import Category from "../models/CatagoryModel.js";
import Subcategory from "../models/SubcategoryModel.js";

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

      // Check if there is already a subcategory with the same name.
      const nameExists = await Subcategory.findOne({ name });
      if (nameExists) {
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
      res.status(201).json({
         ok: true,
         msg: `${name} subcategory created successfully`,
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

      // Check if user is admin.
      const isAdmin = await User.findById({ _id }).populate("role").select("role");
      if (isAdmin.role.name !== "admin") {
         return res.status(400).json({ ok: false, msg: "Access denied" });
      }

      console.log(req.params);
   } catch (error) {
      internalServerError(error, res);
   }
};

export { createSubcategory, editSubcategory };
