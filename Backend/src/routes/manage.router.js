import { Router } from "express";

const router = Router();

router.get("/user", (req, res) => {
   console.log("From manage/user");
});

export default router;
