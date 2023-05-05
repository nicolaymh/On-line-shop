import Role from "../../models/RoleModel.js";

/**
 * The function creates three roles (user, moderator, and admin) if they do not already exist in the
 * database.
 * @returns If `countRoles` is greater than 0, nothing is returned. If `countRoles` is less than or
 * equal to 0, a Promise is returned that creates three new `Role` documents with the names "user",
 * "moderator", and "admin". If there is an error, it is logged to the console.
 */
const createRoles = async () => {
  try {
    const countRoles = await Role.estimatedDocumentCount();

    if (countRoles > 0) return;

    await Promise.all([
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
