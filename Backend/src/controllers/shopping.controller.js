import mercadopago from "mercadopago";

import internalServerError from "../helpers/internalServerError.js";

const createOrder = async (req, res) => {
   try {
      console.log(req.mercadoPagoInfo);
      res.json(req.mercadoPagoInfo);
   } catch (error) {
      internalServerError(error, res);
   }
};

const receivedWebhook = async (req, res) => {
   const payment = req.query;

   console.log(req);

   // try {
   //    if (payment.type === payment) {
   //       const data = await mercadopago.payment.findById(payment[DataTransfer.id]);

   //       console.log(data);

   //       // Store in database...
   //    }

   //    res.sendStatus(204);
   // } catch (error) {
   //    console.log(error);
   //    return res.sendStatus(500).json({ error: error.message });
   // }
};

export { createOrder, receivedWebhook };
