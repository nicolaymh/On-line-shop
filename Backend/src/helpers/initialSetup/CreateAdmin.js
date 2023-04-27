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

    const adm = await admin.save();
  } catch (error) {
    console.log(error);
  }
};

export default createAdmin;
