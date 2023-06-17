import multer from "multer";
import internalServerError from "../../helpers/internalServerError.js";

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "./src/middlewares/multer/uploaded/");
   },
   filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
   },
});

const upload = multer({
   storage: storage,
   limits: {
      fileSize: 1024 * 1024, // Tamaño máximo de archivo de 1MB
   },
});

const multerFunction = (req, res, next) => {
   upload.single("image")(req, res, function (err) {
      if (err instanceof multer.MulterError) {
         return res.status(400).json({ ok: false, msg: err.message });
      }
      next();
   });
};

const uploading = [multerFunction];

export default uploading;
