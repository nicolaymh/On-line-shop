import mongoose from "mongoose";

const rolesSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

const Role = mongoose.model("Role", rolesSchema);

export default Role;
