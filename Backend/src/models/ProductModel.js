import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         require: true,
         trim: true,
      },
      price: {
         type: Number,
         require: true,
         trim: true,
      },
      description: {
         type: String,
         require: true,
         trim: true,
      },
      imgLink: {
         type: String,
         require: true,
         trim: true,
      },
      category: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Category",
      },
      subcategory: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Subcategory",
      },
      status: {
         type: Boolean,
         default: true,
      },
   },
   { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
