import Product from "../../models/ProductModel.js";

export const getAllProductsInfo = async () => {
   const products = await Product.find()
      .lean()
      .select("_id name price description category subcategory status image");

   return products;
};
