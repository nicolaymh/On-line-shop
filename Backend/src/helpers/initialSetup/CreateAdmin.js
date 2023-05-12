import bcrypt from "bcryptjs";

import Role from "../../models/RoleModel.js";
import User from "../../models/UserModel.js";

// Admin Info
const adminInfo = {
   name: process.env.ADMIN_NAME,
   password: process.env.PASSWORD,
   email: process.env.EMAIL,
   address: process.env.ADDRESS,
   phone: process.env.PHONE,
};

const createAdmin = async () => {
   try {
      // Verify if admin exists
      const { name, email, password } = adminInfo;
      const adminExists = await User.exists({ name, email });
      if (adminExists) return;

      // Finding for admin role name
      const { _id } = await Role.findOne({ name });

      // Encrypt password before saving
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      // Create admin
      await User.create({
         ...adminInfo,
         password: hash,
         token: "",
         confirmed: true,
         role: _id,
      });

      console.log("\n" + "✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔");
      console.log("Admin user created successfully");
      console.log("✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔✔" + "\n");
   } catch (error) {
      console.error(`Error creating admin user: ${error.message}`);
      throw error;
   }
};

export default createAdmin;
