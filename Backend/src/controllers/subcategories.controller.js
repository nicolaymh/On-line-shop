import Category from "../models/CatagoryModel.js";
import Subcategory from "../models/SubcategoryModel.js";

import internalServerError from "../helpers/internalServerError.js";

const getSubcategories = async () => {
  console.log("From getSubcategories controller");
};

const createSubcategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { name } = req.body;

    const subcategoryExists = await Subcategory.findOne({ name });
    if (subcategoryExists) {
      return res
        .status(400)
        .json({ ok: false, msg: "There is already a subcategory with this name" });
    }

    const categoryId = await Category.findOne({ name: category }).select("_id");
    if (!categoryId) {
      return res.status(400).json({ ok: false, msg: "There is no category with this name" });
    }

    let newSubcategory = new Subcategory({ name, category: categoryId._id });
    newSubcategory = await newSubcategory.save();

    res
      .status(201)
      .json({ ok: true, msg: `${newSubcategory.name} subcategory created successfully` });
  } catch (error) {
    internalServerError(error, res);
  }
};

export { getSubcategories, createSubcategory };
