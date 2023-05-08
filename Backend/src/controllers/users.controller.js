import bcrypt from "bcryptjs";

import generateJWT from "../helpers/tokens/generateJWT.js";
import generateTokenUnique from "../helpers/tokens/generateTokenUnique.js";

// Model import
import User from "../models/UserModel.js";
import Role from "../models/RoleModel.js";

import internalServerError from "../helpers/internalServerError.js";

import * as emailSend from "../helpers/email/emailSending.js";

// Register
const register = async (req, res) => {
   try {
      const { name, email, password } = req.body;

      // Repeated email check
      const emailExists = await User.findOne({ email });
      if (emailExists) {
         return res.status(400).json({
            ok: false,
            msg: "There is already a registered user with this email",
            email,
         });
      }

      // user creation model instance
      const userNew = new User(req.body);

      // Encrypt password before saving
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      // Save encrypted password
      userNew.password = hash;

      // Generating and saving one time use token
      userNew.token = generateTokenUnique();

      // Save user in DB
      await userNew.save();

      // Send confirmation email
      emailSend.sendEmailRegister({ name, email, token: userNew.token });

      res.status(201).json({
         ok: true,
         msg: "User created successfully, check your email to confirm the account",
      });
   } catch (error) {
      internalServerError(error, res);
   }
};

// Confirm account
const confirmAccount = async (req, res) => {
   try {
      const token = req.params;
      const userExists = await User.findOne(token);

      if (!userExists) {
         return res.status(400).json({ ok: false, msg: "Invalid token" });
      }

      userExists.token = "";
      userExists.confirmed = true;
      await userExists.save();
      res.status(201).json({ ok: true, msg: "User confirmed successfully" });
   } catch (error) {
      internalServerError(error, res);
   }
};

// Login
const login = async (req, res) => {
   try {
      const { email, password } = req.body;

      const userLogin = await User.findOne({ email });

      if (!userLogin) return res.status(400).json({ ok: false, msg: "Wrong email or password!" });
      if (!userLogin.confirmed)
         return res
            .status(400)
            .json({ ok: false, msg: "This account has not been confirmed", email });

      const verifyPassword = await userLogin.comparePassword(password);
      if (!verifyPassword)
         return res.status(400).json({ ok: false, msg: "Wrong email or password!" });

      const { _id, name, address, phone, role } = userLogin;

      // Get role name
      const roleInfo = await Role.findById(role);

      // Generate token
      const token = await generateJWT(_id, name);
      res.status(201).json({
         ok: true,
         _id,
         name,
         email,
         address,
         phone,
         role: roleInfo.name,
         token,
      });
   } catch (error) {
      internalServerError(error, res);
   }
};

// Restore password
const restorePassword = async (req, res) => {
   try {
      const { email } = req.body;

      const userRestore = await User.findOne({ email });
      if (!userRestore) return res.status(400).json({ ok: false, msg: "User does not exist" });

      userRestore.token = generateTokenUnique();
      const user = await userRestore.save();
      res.status(201).json({ ok: true, msg: "Check your email to restore password" });

      // Send forget-password email
      emailSend.sendEmailForgetPass(user);
   } catch (error) {
      internalServerError(error, res);
   }
};

// Check if token exists
const checkToken = async (req, res) => {
   try {
      const { token } = req.params;

      const userToken = await User.findOne({ token });

      if (!userToken) return res.status(404).json({ ok: false, msg: "Invalid token" });

      res.status(201).json({ ok: true, msg: "valid token" });
   } catch (error) {
      internalServerError(error, res);
   }
};

// Create a new password
const newPassword = async (req, res) => {
   try {
      const { token } = req.params;
      const { password } = req.body;

      const userNewPassword = await User.findOne({ token });

      if (!userNewPassword) return res.status(400).json({ ok: false, msg: "Invalid token" });

      // Encrypt new password before saving
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      userNewPassword.token = "";
      userNewPassword.password = hash;

      await userNewPassword.save();

      res.status(201).json({ ok: true, msg: "Password changed successfully" });
   } catch (error) {
      internalServerError(error, res);
   }
};

// Edit user info
const editInfoUser = async (req, res) => {
   try {
      const { _id, role } = req.user;
      const { name, email, address, phone, password } = req.body;

      //Admin can not change his/her info
      if (role === "admin") return;

      // Check Password and User
      let checkPassword = await User.findById(_id);

      if (checkPassword.email !== email) {
         return res.status(400).json({ ok: false, msg: "An error has occurred" });
      }

      checkPassword = await checkPassword.comparePassword(password);

      if (!checkPassword) {
         return res.status(400).json({ ok: false, msg: "Wrong password" });
      }

      // Update user info
      const updated = await User.findByIdAndUpdate(
         _id,
         {
            name,
            address,
            phone,
         },
         { new: true }
      ).select("_id name email address phone");

      res.status(201).json({
         ok: true,
         msg: "User info updated successfully",
         user: { ...updated._doc, role },
      });
   } catch (error) {
      internalServerError(error, res);
   }
};

// check if user is logged in
const profile = async (req, res) => {
   const { user } = req;
   res.json(user);
};

export {
   register,
   confirmAccount,
   login,
   restorePassword,
   checkToken,
   newPassword,
   editInfoUser,
   profile,
};
