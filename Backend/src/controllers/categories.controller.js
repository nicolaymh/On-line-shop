import mapCategoriesSubcategories from "../helpers/mapCategories.js";

import internalServerError from "../helpers/internalServerError.js";

const getcategories = async (req, res) => {
   try {
      const categoriesSubcategories = await mapCategoriesSubcategories();

      res.status(201).json({ userInfo: { ...req.user }, categoriesSubcategories });
   } catch (error) {
      internalServerError(error, res);
   }
};

export { getcategories };
