import User from "../models/UserModel.js";

const createSubcategory = async (req, res) => {
   const _id = req.user._id;

   const isAdmin = await User.findById({ _id }).populate("role").select("role");
   if (isAdmin.role.name !== "admin") {
      return res.status(400).json({ ok: false, msg: "Access denied" });
   }

   console.log("Hey");
};

export { createSubcategory };
