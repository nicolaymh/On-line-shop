import Role from "../models/RoleModel.js";
import User from "../models/UserModel.js";

import internalServerError from "../helpers/internalServerError.js";

/**
 * This function manages user permissions by allowing an admin to change the role of a user, except for
 * the admin role.
 * @returns If the admin's role is not "admin", a console log message is returned. If the user to
 * modify permission is an admin, a JSON response with status 400 and an error message is returned.
 * Otherwise, a JSON response with status 201 and the user's information and role options is returned.
 */
const manageUser = async (req, res) => {
   try {
      // Info admin
      const { user: admin } = req;
      if (admin.role !== "admin") return console.log("You cannot change permissions.");

      // Info => user email to change permission.
      const { email } = req.params;

      // Find user to modify permission.
      const modifyUserPermissions = await User.findOne({ email })
         .populate("role", "name")
         .select("_id name email address phone role")
         .lean();

      // you can not change the permissions for the admin.
      if (modifyUserPermissions.role.name === "admin") {
         return res.status(400).json({
            ok: false,
            msg: "you cannot change the permissions for this user.",
         });
      }

      // Find all the roles that a user can have, except the administrator role.
      const roles = await Role.find().nor({ name: "admin" }).lean().select("_id, name");

      // Response ==> request ok.
      res.status(201).json({
         ok: true,
         modifyUserPermissions: { ...modifyUserPermissions, role: modifyUserPermissions.role.name },
         roleOptions: roles,
      });
   } catch (error) {
      internalServerError(error, res);
   }
};

export { manageUser };
