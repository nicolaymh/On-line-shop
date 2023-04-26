import internalServerError from "../helpers/internalServerError.js";
import Category from "../models/CatagoryModel.js";

const getcategories = async (req, res) => {
  try {
    const { _id, name } = req.user;
    console.log(_id, name);

    const categories = await Category.find();

    console.log(req.user);
  } catch (error) {
    internalServerError(error, res);
  }
};

export { getcategories };
