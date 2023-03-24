import jwt from "jsonwebtoken";
import internalServerError from "../helpers/internalServerError.js";
import User from "../models/UserModel.js";

const checkAuth = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const { _id, name, email } = await User.findById(decoded.id);

      req.user = { _id, name, email };
    } catch (error) {
      internalServerError(error, res);
    }
  }

  if (!token) {
    return res.status(400).json({ ok: false, msg: "Invalid token" });
  }

  next();
};

export default checkAuth;
