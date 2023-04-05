import internalServerError from "../helpers/internalServerError.js";
import Category from "../models/CatagoryModel.js";

const createCategory = async (req, res) => {
  const { _id: creator } = req.user;

  const { name } = req.body;

  const nameExits = await Category.findOne({ name });

  try {
    if (nameExits) {
      return res.status(400).json({ ok: false, msg: `There is already a category called ${name}` });
    }

    const newCategory = new Category({ ...req.body, creator });

    await newCategory.save();

    res.status(201).json({ ok: true, msg: "Category created successfully" });
  } catch (error) {
    console.log(error);
    internalServerError(error, res);
  }
};

const getCategoriesInfo = async (req, res) => {
  try {
    const { _id, name } = req.user;

    const allCategories = await Category.find().select("id name description");

    if (!allCategories.length) {
      return res.status(400).json({ ok: false, msg: "There are no categories" });
    }

    res.status(201).json({ ok: true, user: { _id, name }, categories: [...allCategories] });
  } catch (error) {
    console.log(error);
    internalServerError(error, res);
  }
};

const updateCategory = async (req, res) => {};

export { createCategory, getCategoriesInfo, updateCategory };
