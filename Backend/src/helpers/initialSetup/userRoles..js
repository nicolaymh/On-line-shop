import Role from "../../models/RoleModel.js";

// Roles
const roles = ["user", "moderator", "admin"];

/**
 * This function creates roles in a database if they do not already exist.
 * @returns If the `countRoles` variable is greater than 0, the function will return nothing. If the
 * `countRoles` variable is less than or equal to 0, the function will return a Promise that resolves
 * when all the roles in the `roles` array have been created and saved to the database. If there is an
 * error during the process, the function will throw an error.
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

      console.log("**********⭐⭐⭐ Created Roles: ⭐⭐⭐**********" + "\n");
   } catch (error) {
      console.error(`Error creating roles: ${error.message}`);
      throw error;
   }
};

export default createRoles;
