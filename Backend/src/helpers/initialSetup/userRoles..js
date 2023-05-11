import Role from "../../models/RoleModel.js";

// Roles
const roles = ["user", "moderator", "admin"];

/**
 * This function creates roles in a database if they do not already exist.
 * @returns If `countRoles` is greater than 0, the function will return nothing (`undefined`). If
 * `countRoles` is less than or equal to 0, the function will return a Promise that resolves when all
 * the roles in the `roles` array have been created and saved to the database.
 */
const createRoles = async () => {
   try {
      const countRoles = await Role.estimatedDocumentCount();

      if (countRoles > 0) return;

      await Promise.all(
         roles.map((role) => {
            return new Role({ name: role }).save();
         })
      );

      console.log("**********⭐⭐⭐ Created Roles: ⭐⭐⭐**********");
   } catch (error) {
      console.error(`Error creating roles: ${error.message}`);
      throw error;
   }
};

export default createRoles;
