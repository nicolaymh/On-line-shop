import Role from "../../models/RoleModel.js";

/**
 * The function creates three roles (user, moderator, and admin) if there are no roles already in the
 * database.
 * @returns If `countRoles` is greater than 0, nothing is returned. If `countRoles` is less than or
 * equal to 0, an array of `Role` objects is returned after they are created and saved to the database.
 * The console will also log a message indicating that the roles were created.
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

    console.log("**********⭐⭐⭐ Created Roles: ⭐⭐⭐**********");
  } catch (error) {
    console.log(error);
  }
};

export default createRoles;
