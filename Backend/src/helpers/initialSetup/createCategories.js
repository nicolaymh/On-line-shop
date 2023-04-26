import Category from "../../models/CatagoryModel.js";

// Categories initial Setup
let categories = [
  { name: "playstation", description: "sony entertainment", CreateInDb: "" },
  { name: "xbox", description: "microsoft", CreateInDb: "" },
  { name: "nintendo", description: "nintendo", CreateInDb: "" },
  { name: "laptops", description: "laptop brands", CreateInDb: "" },
];

/**
 * This function creates new categories in a database and checks if they already exist.
 */
const createCategories = async () => {
  const newCategory = await Promise.all(
    categories.map(async (c) => {
      const { name, description } = c;

      const exists = await Category.findOne({ name });

      if (exists) return { ...c, CreateInDb: "It already exists in the DB 🔴" };

      if (!exists) {
        // Create in DB
        new Category({ name, description }).save();

        return { ...c, CreateInDb: "Created in the DB 🟢" };
      }
    })
  );

  console.log("**********⭐⭐⭐ Categories in the DB: ⭐⭐⭐**********");
  console.log(newCategory);
};

export default createCategories;
