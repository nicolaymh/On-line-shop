import multer from "multer";

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "./src/middlewares/multer/uploads/");
   },
   filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
   },
});

const upload = multer({
   storage: storage,
   limits: {
      fileSize: 1024 * 1024, // Maximum image size 2 MB
   },
});

const multerFunction = (req, res, next) => {
   upload.single("image")(req, res, function (err) {
      if (!req.file) {
         return res.status(400).json({ ok: false, msg: "A valid image is required" });
      }

      if (err instanceof multer.MulterError) {
         return res.status(400).json({ ok: false, msg: err.message });
      }

      next();
   });
};

const multerHandler = [multerFunction];

export default multerHandler;
