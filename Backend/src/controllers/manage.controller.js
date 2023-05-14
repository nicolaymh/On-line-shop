import Role from "../models/RoleModel.js";

const manageUser = async (req, res) => {
   try {
      const { user } = req;
      const { email } = req.params;

      const roles = await Role.find({}).nor({ name: "admin" }).lean().select("_id, name");

      if (user.role !== "admin") {
         return res.status(400).json({ ok: false, msg: "Access denied for this request." });
      }
   } catch (error) {}
};

export { manageUser };
