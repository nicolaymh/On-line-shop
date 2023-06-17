import fse from "fs-extra";
import path from "path";

import internalServerError from "../../helpers/internalServerError.js";

/**
 * The function deletes all files in a specific directory using the Node.js file system module.
 * @param response - The `response` parameter is likely an object representing the HTTP response that
 * will be sent back to the client. It is used in the `internalServerError` function to send an error
 * response if an error occurs during the file deletion process.
 */
const deleteImageLocal = async (response) => {
   try {
      const files = await fse.readdir("./src/middlewares/multer/uploads/");

      for (const file of files) {
         const filePath = path.join("./src/middlewares/multer/uploads/", file);
         const stat = await fse.stat(filePath);

         if (stat.isFile()) {
            await fse.unlink(filePath);
         }
      }
   } catch (error) {
      internalServerError(error, response);
   }
};

export default deleteImageLocal;
