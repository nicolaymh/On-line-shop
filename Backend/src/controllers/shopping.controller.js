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
   try {
      console.log(req.body);
      console.log(req.query);
   } catch (error) {
      console.log(error);
   }
};

export { createOrder, receivedWebhook };
