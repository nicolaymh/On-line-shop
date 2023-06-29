import Category from "../../models/CatagoryModel.js";

// Categories initial Setup
let categories = [
   { name: "playstation", description: "sony entertainment", CreateInDb: "" },
   // { name: "xbox", description: "microsoft", CreateInDb: "" },
   { name: "nintendo", description: "nintendo", CreateInDb: "" },
   { name: "laptops", description: "laptop brands", CreateInDb: "" },
];

/**
 * This function creates categories in a database and checks if they already exist.
 */
const createCategories = async () => {
   try {
      const newCategories = await Promise.all(
         categories.map(async (category) => {
            const { name, description } = category;

            // Check if category exists.
            const existingCategory = await Category.findOne({ name });
            if (existingCategory) {
               // Send Info to categories.
               return { ...category, CreateInDb: "It already exists in the DB 🔴" };
            }

            // If category does not exist, then, create the category.
            await Category.create({ name, description });

            // Send info to categories.
            return { ...category, CreateInDb: "Created in the DB 🟢" };
         })
      );

      console.log("\n" + "**********⭐⭐⭐ Categories in the DB: ⭐⭐⭐**********" + "\n");
      console.log(newCategories);
   } catch (error) {
      console.error(`Error creating categories: ${error.message}`);
      throw error;
   }
};

export default createCategories;
