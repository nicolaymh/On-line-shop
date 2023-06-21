import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         trim: true,
      },
      price: {
         type: Number,
         required: true,
         trim: true,
      },
      description: {
         type: String,
         required: true,
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
      image: {
         public_id: {
            type: String,
            required: true,
         },
         url: {
            type: String,
            required: true,
         },
      },
   },
   { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
