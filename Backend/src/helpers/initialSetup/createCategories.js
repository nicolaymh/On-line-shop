import Category from "../../models/CatagoryModel.js";

// Categories initial Setup
let categories = [
   { name: "playstation", description: "sony entertainment", CreateInDb: "" },
   { name: "xbox", description: "microsoft", CreateInDb: "" },
   { name: "nintendo", description: "nintendo", CreateInDb: "" },
   { name: "laptops", description: "laptop brands", CreateInDb: "" },
];

const createCategories = async () => {
   try {
      const newCategory = await Promise.all(
         categories.map(async (c) => {
            const { name, description } = c;

            const exists = await Category.findOne({ name });

            if (exists) return { ...c, CreateInDb: "It already exists in the DB 🔴" };

            if (!exists) {
               new Category({ name, description }).save();

               return { ...c, CreateInDb: "Created in the DB 🟢" };
            }
         })
      );

      console.log("**********⭐⭐⭐ Categories in the DB: ⭐⭐⭐**********");
      console.log(newCategory);
   } catch (error) {
      console.error(`Error creating categories: ${error.message}`);
      throw error;
   }
};

export default createCategories;
