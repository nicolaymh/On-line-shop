import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const generateJWT = (id, name) => {
  return new Promise((resolve, reject) => {
    const payload = { id, name };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("could not generate token");
        }
        resolve(token);
      }
    );
  });
};

export default generateJWT;
