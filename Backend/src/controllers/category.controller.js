import Category from "../models/CatagoryModel.js";

const createCategory = async (req, res) => {
  const { name } = req.body;

  const nameExists = await Category.findOne({ name });

  console.log(nameExists);
};

export { createCategory };
