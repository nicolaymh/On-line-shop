import { Router } from "express";

import * as shoppingController from "../controllers/shopping.controller.js";

// Middlewares.
import checkAuth from "../middlewares/auth/checkAuth.js";
import shoppingConfig from "../middlewares/shopping/shoppingConfig.js";

const router = Router();

router.post("/create-order", checkAuth, shoppingConfig, shoppingController.createOrder);

router.get("/success", (req, res) => res.send("successful payment"));
router.get("/failure", (req, res) => res.send("Failed payment"));
router.get("/pending", (req, res) => res.send("Pending"));

router.post("/webhook", shoppingController.receivedWebhook);

export default router;
