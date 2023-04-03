import internalServerError from "../helpers/internalServerError.js";
import Category from "../models/CatagoryModel.js";

const createCategory = async (req, res) => {
  const { name } = req.body;

  const nameExists = await Category.findOne({ name });

  if (nameExists) {
    return res.status(400).json({ ok: false, msg: `There is already a category called ${name}` });
  }

  try {
    const newCategory = new Category(req.body);

    await newCategory.save();

    res.status(201).json({ ok: true, msg: `Created ${newCategory.name} category successfully` });
  } catch (error) {
    console.log(error);
    internalServerError(error, res);
  }
};

export { createCategory };
