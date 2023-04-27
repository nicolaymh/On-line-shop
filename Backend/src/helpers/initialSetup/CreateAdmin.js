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

/**
 * This function creates an admin user with encrypted password and assigns admin role if the user does
 * not already exist.
 * @returns If `adminExists` is truthy, the function will return without doing anything. If
 * `adminExists` is falsy, the function will create a new admin user and save it to the database. No
 * explicit value is returned in this case.
 */
const createAdmin = async () => {
  try {
    // Verify if admin exists
    const { name, email } = adminInfo;
    const adminExists = await User.findOne({ name, email });
    if (adminExists) return;

    // Create admin
    const id = await Role.findOne({ name: "admin" }).select("_id");
    const admin = new User(adminInfo);

    // Encrypt password before saving
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(admin.password, salt);
    admin.password = hash;

    admin.token = "";
    admin.confirmed = true;
    admin.role = id;

    await admin.save();
  } catch (error) {
    console.log(error);
  }
};

export default createAdmin;
