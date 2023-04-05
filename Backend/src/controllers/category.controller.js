import internalServerError from "../helpers/internalServerError.js";
import Category from "../models/CatagoryModel.js";

const createCategory = async (req, res) => {
  console.log(req.user);

  const { name } = req.body;

  const nameExits = await Category.findOne({ name });

  try {
    if (nameExits) {
      return res.status(400).json({ ok: false, msg: `There is already a category called ${name}` });
    }

    const newCategory = new Category(req.body);

    await newCategory.save();

    res.status(201).json({ ok: true, msg: "Category created successfully" });
  } catch (error) {
    console.log(error);
    internalServerError(error, res);
  }
};

const getCategoriesInfo = async (req, res) => {};

const updateCategory = async (req, res) => {};

export { createCategory, updateCategory };
