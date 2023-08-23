import { Router } from "express";

import * as shoppingController from "../controllers/shopping.controller.js";

const router = Router();

router.post("/create-order", shoppingController.createOrder);

router.get("/success", (req, res) => res.send("Success"));
router.get("/failure", (req, res) => res.send("Failure"));
router.get("/pending", (req, res) => res.send("Pending"));

router.post("/webhook", (req, res) => shoppingController.receivedWebhook);

export default router;
