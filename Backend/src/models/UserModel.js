import bcrypt from "bcryptjs";
import mongoose from "mongoose";

import Role from "./RoleModel.js";

const userSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         trim: true,
      },

      password: {
         type: String,
         required: true,
         trim: true,
      },

      email: {
         type: String,
         required: true,
         unique: true,
         trim: true,
      },

      address: {
         type: String,
         required: true,
         trim: true,
      },

      phone: {
         type: String,
         required: true,
         trim: true,
      },

      token: {
         type: String,
         trim: true,
      },

      confirmed: {
         type: Boolean,
         default: false,
      },

      role: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Role",
      },
   },
   { timestamps: true }
);

userSchema.pre("save", async function (next) {
   if (this.role) return;

   const { _id } = await Role.findOne({ name: "user" });
   this.role = _id;

   next();
});

userSchema.methods.comparePassword = async function (userPassword) {
   return bcrypt.compareSync(userPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
