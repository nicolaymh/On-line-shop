import mercadopago from "mercadopago";

import Shopping from "../models/shoppingModel.js";

import internalServerError from "../helpers/internalServerError.js";

let cart = [];
let prices = [];
let user = {};

const createOrder = async (req, res) => {
   cart = req.body.cart;
   prices = req.body.prices;
   user = req.user;

   try {
      res.json(req.mercadoPagoInfo);
   } catch (error) {
      internalServerError(error, res);
   }
};

const receivedWebhook = async (req, res) => {
   const payment = req.query;

   try {
      if (payment.type === "payment") {
         const { body } = await mercadopago.payment.findById(payment["data.id"]);
         console.log(body.date_created);

         // Store in DB.
         await Shopping.create({
            shoppingId: payment["data.id"],
            shopper: user._id,
            cart,
            grossPrice: prices.grossPrice,
            tax: prices.tax,
            finalPrice: prices.finalPrice,
            date: body.date_created,
         });
      }

      return res.sendStatus(204);
   } catch (error) {
      console.log(error);
      return res.status(500).json({ ok: false, msg: error.message });
   }
};

export { createOrder, receivedWebhook };
