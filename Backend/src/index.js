import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/users.routes.js";

import dbConnection from "./database/config.js";

// Create server express
const app = express();

// Parse to body json
app.use(express.json());

// Activate environment variables
dotenv.config();

// DB Connection
dbConnection();

// CORS configuration
const whitelist = [process.env.FRONTEND_URL];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

// Routing
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Running on port ${process.env.PORT} 🚀`));
