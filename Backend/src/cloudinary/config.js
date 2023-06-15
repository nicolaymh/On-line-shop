import { v2 as cloudinary } from "cloudinary";

// Initial cloudinary config.
const config = {
   cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.API_KEY,
   api_secret: process.env.API_SECRET,
};

const cloudinaryConfig = () => cloudinary.config(config);

export default cloudinaryConfig;
