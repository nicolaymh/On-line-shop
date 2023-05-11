import Role from "../../models/RoleModel.js";

// Roles
const roles = ["user", "moderator", "admin"];

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
