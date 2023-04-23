import Role from "../../models/RoleModel.js";

/**
 * This function creates three roles (user, moderator, and admin) if they do not already exist in the
 * database.
 * @returns If `countRoles` is greater than 0, nothing is returned. If `countRoles` is less than or
 * equal to 0, an array of `Role` objects is returned after they are created and saved to the database.
 */
const createRoles = async () => {
  try {
    const countRoles = await Role.estimatedDocumentCount();

    if (countRoles > 0) return;

    const roles = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "moderator" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(roles);
  } catch (error) {
    console.log(error);
  }
};

export default createRoles;
