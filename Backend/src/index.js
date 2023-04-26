import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Routes
import userRoutes from "./routes/users.routes.js";
import subCategoriesRoutes from "./routes/subcategories.routes.js";

// mongodb and mongoose
import dbConnection from "./database/config.js";

// Initial Setup
import createRoles from "./helpers/initialSetup/userRoles..js";
import createAdmin from "./helpers/initialSetup/CreateAdmin.js";
import createCategories from "./helpers/initialSetup/createCategories.js";

// Create server express
const app = express();

// Parse to body json
app.use(express.json());

// Activate environment variables
dotenv.config();

// DB Connection
dbConnection();

// Initial Setup
createRoles();
createAdmin();
createCategories();

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
app.use("/api/subcategories", subCategoriesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Running on port ${process.env.PORT} 🚀`));
