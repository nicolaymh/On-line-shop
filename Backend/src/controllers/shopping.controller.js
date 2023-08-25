import mercadopago from "mercadopago";

import internalServerError from "../helpers/internalServerError.js";

const createOrder = async (req, res) => {
   try {
      // console.log(req.mercadoPagoInfo);

      res.json(req.mercadoPagoInfo);
   } catch (error) {
      internalServerError(error, res);
   }
};

const receivedWebhook = async (req, res) => {
   const payment = req.query;

   try {
      if (payment.type === "payment") {
         const data = await mercadopago.payment.findById(payment["data.id"]);
         console.log(data);
      }

      return res.sendStatus(204);
   } catch (error) {
      console.log(error);
      return res.status(500).json({ ok: false, msg: error.message });
   }
};

export { createOrder, receivedWebhook };
