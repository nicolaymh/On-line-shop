import Role from "../../models/RoleModel.js";

const createRoles = async () => {
  try {
    const countRoles = await Role.estimatedDocumentCount();

    if (countRoles > 0) return console.log("there are already roles");

    const roles = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "moderator" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log("There are no roles");
    console.log(roles);
  } catch (error) {
    console.log(error);
  }
};

export default createRoles;
