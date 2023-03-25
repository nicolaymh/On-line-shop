import jwt from "jsonwebtoken";
import internalServerError from "../helpers/internalServerError.js";
import User from "../models/UserModel.js";

const checkAuth = async (req, res, next) => {
  let token;

  try {
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];

      const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

      const userInfo = await User.findById(tokenDecode.id).select([
        "name",
        "email",
        "address",
        "phone",
      ]);

      req.user = userInfo;

      next();
    }

    if (!token) {
      return res.status(400).json({ ok: false, msg: "Invalid Token" });
    }
  } catch (error) {
    internalServerError(error, res);
  }
};

export default checkAuth;
