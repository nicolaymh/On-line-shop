import multer from "multer";

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "./src/middlewares/multer/uploaded/");
   },
   filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
   },
});

const upload = multer({ storage: storage, preservePath: false });

export default upload;
