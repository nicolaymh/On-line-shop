import internalServerError from "../helpers/internalServerError.js";
import Category from "../models/CatagoryModel.js";

const getcategories = async (req, res) => {
   try {
      const categories = await Category.find().select("_id name description");

      console.log(categories);

      res.status(201).json({ userInfo: { ...req.user }, categories });
   } catch (error) {
      internalServerError(error, res);
   }
};

export { getcategories };
