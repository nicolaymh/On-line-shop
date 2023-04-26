import Category from "../models/CatagoryModel.js";
import Subcategory from "../models/SubcategoryModel.js";

import internalServerError from "../helpers/internalServerError.js";

const createSubcategory = async (req, res) => {
  try {
    let { category } = req.params;
    category = category.toLowerCase();

    let { name } = req.body;
    name = name.toLowerCase();

    const searchCategory = await Category.findOne({ name: category });
    if (!searchCategory) {
      return res.status(400).json({ ok: false, msg: `There is no category called ${category}` });
    }

    const subcategoryExists = await Subcategory.findOne({
      name,
      category: searchCategory._id,
    });

    if (subcategoryExists) {
      return res.status(400).json({
        ok: false,
        msg: `There is already a subcategory ${name} in ${category}`,
      });
    }

    const newCategory = new Subcategory({ name, category: searchCategory._id });
    await newCategory.save();

    res.status(201).json({
      ok: true,
      msg: `Subcategory called ${name} created in ${category} category successfully`,
    });
  } catch (error) {
    internalServerError(error, res);
  }
};

const getSubcategories = async () => {
  const subcategories = await Subcategory.find({ name: "consoles" });
  console.log(subcategories);
};

export { createSubcategory, getSubcategories };
