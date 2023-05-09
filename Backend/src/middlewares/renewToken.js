import jwt from "jsonwebtoken";
import generateJWT from "../helpers/tokens/generateJWT.js";

/**
 * This function renews a JWT token by verifying the existing token and generating a new one with a 30
 * minute expiration time.
 * @param req - req stands for request and it is an object that contains information about the incoming
 * HTTP request such as the request headers, request parameters, request body, etc.
 * @param res - `res` is the response object that is used to send a response back to the client making
 * the request. It contains methods like `status` to set the HTTP status code, `json` to send a JSON
 * response, and many others. In this code snippet, `res` is used to
 */
const renewToken = async (req, res) => {
   try {
      let { token } = req.params;

      // Verify Token
      const { id, name } = jwt.verify(token, process.env.JWT_SECRET);

      // Generate a new token
      token = await generateJWT(id, name, "5s");

      res.status(201).json({ ok: true, token, msg: "new token" });
   } catch (error) {
      console.error(error);

      res.status(500).json({
         ok: false,
         msg: error.message,
      });
   }
};

export default renewToken;
