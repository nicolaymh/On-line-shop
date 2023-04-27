import jwt from "jsonwebtoken";
import internalServerError from "../helpers/internalServerError.js";

// Models
import User from "../models/UserModel.js";
import Role from "../models/RoleModel.js";

/**
 * This function checks the validity of a token in the authorization header of a request and retrieves
 * user information and role if the token is valid.
 * @param req - req stands for request and it is an object that contains information about the HTTP
 * request that was made, such as the request headers, request parameters, request body, etc.
 * @param res - `res` is the response object that is used to send a response back to the client making
 * the request. It contains methods and properties that allow the server to send data, set headers, and
 * set the status code of the response.
 * @param next - next is a function that is called to pass control to the next middleware function in
 * the stack. It is typically used to move on to the next function after the current function has
 * completed its task.
 * @returns If the token is successfully decoded and the user information is retrieved, the function
 * will call the `next()` function to move on to the next middleware function. If the token is not
 * found or invalid, the function will return a JSON response with a status code of 400 and a message
 * of "Invalid Token". If there is an error during the decoding or retrieval of user information, the
 * function will call
 */
const checkAuth = async (req, res, next) => {
  let token;

  try {
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];

      const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

      const userInfo = await User.findById(tokenDecode.id);

      // Get info role
      const roleInfo = await Role.findById(userInfo.role);

      const { _id, name, address, email, phone } = userInfo;

      req.user = { _id, name, address, email, phone, role: roleInfo.name };

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
