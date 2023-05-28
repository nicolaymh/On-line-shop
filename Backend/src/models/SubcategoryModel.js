import mongoose from "mongoose";

const subcategorySchema = new mongoose.Schema(
   {
      name: {
         type: String,
         require: true,
         trim: true,
      },

      description: {
         type: String,
         require: true,
         trim: true,
      },

      category: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Category",
      },
   },
   { timestamps: true }
);

const Subcategory = mongoose.model("Subcategory", subcategorySchema);

export default Subcategory;
