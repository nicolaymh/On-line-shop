import Role from "../models/RoleModel.js";
import User from "../models/UserModel.js";

import internalServerError from "../helpers/internalServerError.js";

/**
 * This function manages user permissions by allowing an admin to modify the permissions of a non-admin
 * user.
 * @returns If the admin's role is not "admin", a console log message is returned. If the user to
 * modify permissions is not found, a JSON response with status 400 and message "User does not exist"
 * is returned. If the user to modify permissions has the role of "admin", a JSON response with status
 * 400 and message "You cannot change the permissions for this user" is returned.
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

      if (!modifyUserPermissions)
         return res.status(400).json({ ok: false, msg: "User does not exist." });

      // you can not change the permissions for the admin.
      if (modifyUserPermissions.role.name === "admin") {
         return res.status(400).json({
            ok: false,
            msg: "You cannot change the permissions for this user.",
         });
      }

      // Find all the roles that a user can have, except the administrator role.
      const roles = await Role.find().nor({ name: "admin" }).lean().select("_id, name");

      // Response ==> request ok.
      res.status(201).json({
         ok: true,
         userData: { ...modifyUserPermissions, role: modifyUserPermissions.role.name },
         roleOptions: roles,
      });
   } catch (error) {
      internalServerError(error, res);
   }
};

const manageRole = async (req, res) => {
   const { _id } = req.user;

   // Check if user who wants to change role to a user, is an admin.
   const admin = await User.findById({ _id }).populate("role", "name");
   if (admin.role.name !== "admin") {
      return res.status(400).json({ ok: false, msg: "You cannot change permissions." });
   }

   console.log("Hey");
};

export { manageUser, manageRole };
