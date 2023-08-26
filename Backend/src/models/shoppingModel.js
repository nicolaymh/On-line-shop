import mongoose from "mongoose";

const shoppingSchema = new mongoose.Schema(
   {
      shoppingId: {
         type: String,
         required: true,
         trim: true,
      },

      shopper: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User",
      },

      cart: {
         type: Array,
         default: [],
      },

      grossPrice: {
         type: Number,
         required: true,
         trim: true,
      },

      tax: {
         type: Number,
         required: true,
         trim: true,
      },

      finalPrice: {
         type: Number,
         required: true,
         trim: true,
      },

      date: {
         type: String,
      },
   },

   { timestamps: true }
);

const Shopping = mongoose.model("Shopping", shoppingSchema);

export default Shopping;
