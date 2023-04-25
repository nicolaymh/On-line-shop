import { Router } from "express";

const router = Router();

router.get("/get-categories", (req, res) => {
  console.log("Desde /get-categories");
});

export default router;
