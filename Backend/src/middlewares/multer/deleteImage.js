import fse from "fs-extra";
import path from "path";

import internalServerError from "../../helpers/internalServerError.js";

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
