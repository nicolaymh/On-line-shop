import jwt from "jsonwebtoken";
import internalServerError from "../helpers/internalServerError.js";

const renewToken = async (req, res) => {
   try {
      const { token } = req.params;

      const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

      console.log(tokenDecode);

      const tokenCreated = tokenDecode.iat;
      const tokenExpired = tokenDecode.exp;
      console.log(new Date(tokenCreated * 1000));
      console.log(tokenExpired);
   } catch (error) {
      console.error(error);

      res.status(500).json({
         ok: false,
         msg: error.message,
      });
   }
};

export default renewToken;
