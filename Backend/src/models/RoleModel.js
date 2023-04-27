import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

const Role = mongoose.model("Role", roleSchema);

export default Role;
