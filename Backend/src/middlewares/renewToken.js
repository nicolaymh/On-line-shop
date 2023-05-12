import jwt from "jsonwebtoken";
import generateJWT from "../helpers/tokens/generateJWT.js";

/**
 * This function renews a JWT token by verifying the existing token and generating a new one with a
 * specified expiration time.
 * @param req - req stands for request and it is an object that contains information about the HTTP
 * request that was made, such as the request method, headers, URL, and any data that was sent with the
 * request. It is an argument passed to the renewToken function.
 * @param res - `res` is the response object that is sent back to the client after the server has
 * processed the request. It contains information such as the status code, headers, and response body.
 * In this case, the `renewToken` function is using `res` to send a JSON response with a
 */
const renewToken = async (req, res) => {
   try {
      let { token } = req.params;

      // Verify Token
      const { id, name } = jwt.verify(token, process.env.JWT_SECRET);

      // Generate a new token
      token = await generateJWT(id, name, "3s");

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
