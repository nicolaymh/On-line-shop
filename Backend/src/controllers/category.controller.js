import mongoose from "mongoose";
import internalServerError from "../helpers/internalServerError.js";
import Category from "../models/CatagoryModel.js";

const createCategory = async (req, res) => {
  const { _id: creator } = req.user;

  const { name } = req.body;

  const nameExists = await Category.findOne({ name });

  try {
    if (nameExists) {
      return res.status(400).json({ ok: false, msg: `There is already a category called ${name}` });
    }

    const newCategory = new Category({ ...req.body, creator });

    await newCategory.save();

    res.status(201).json({ ok: true, msg: "Category created successfully" });
  } catch (error) {
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
    internalServerError(error, res);
  }
};

const updateCategory = async (req, res) => {
  const user = req.user;

  const { _id, name, description } = req.body;

  try {
    const isIdValid = mongoose.Types.ObjectId.isValid(_id);

    if (!isIdValid) {
      return internalServerError(`Id: (${_id}) is an invalid type`, res);
    }

    const findCategory = await Category.findById(_id).select("_id name description");

    findCategory.name = name;
    findCategory.description = description;

    await findCategory.save();

    res.status(201).json({
      ok: true,
      user: { _id: user._id, name: user.name },
      msg: "Category Updated successfully",
    });
  } catch (error) {
    internalServerError(error, res);
  }
};

export { createCategory, getCategoriesInfo, updateCategory };
