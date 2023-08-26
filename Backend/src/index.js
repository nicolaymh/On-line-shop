import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

// Routes.
import userRoutes from "./routes/users.routes.js";
import manageRoutes from "./routes/manage.router.js";
import categoriesRoutes from "./routes/categories.router.js";
import shoppingRoutes from "./routes/shopping.router.js";

// mongodb and mongoose.
import dbConnection from "./database/config.js";

// Cloudinary config.
import cloudinaryConfig from "./cloudinary/config.js";

// Initial Setup.
import createRoles from "./helpers/initialSetup/userRoles..js";
import createAdmin from "./helpers/initialSetup/CreateAdmin.js";
import createCategories from "./helpers/initialSetup/createCategories.js";

// Create server express.
const app = express();

// Morgan.
app.use(morgan("dev"));

// Parse to body json.
app.use(express.json());

// Activate environment variables.
dotenv.config();

// DB Connection.
dbConnection();

// Run initial cloudinary setup.
cloudinaryConfig();

// Initial Setup.
createRoles();
createAdmin();
createCategories();

// CORS configuration.
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

// Routing.
app.use("/api/users", userRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/manage", manageRoutes);
app.use("/api/shopping", shoppingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`${"\n"}🚀 Running on port ${process.env.PORT} 🚀`));
