import mercadopago from "mercadopago";
import internalServerError from "../../helpers/internalServerError.js";

const shoppingConfig = async (req, res, next) => {
   try {
      const { cart } = req.body;

      mercadopago.configure({
         access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN,
      });

      let items = cart.map((product) => {
         return {
            id: product._id,
            title: product.name,
            currency_id: "COP",
            picture_url: product.image.url,
            description: product.description,
            category_id: product.category,
            quantity: product.quantity,
            unit_price: product.price,
         };
      });

      const result = await mercadopago.preferences.create({
         items,
         back_urls: {
            success: "http://localhost:3000/api/shopping/success",
            failure: "http://localhost:3000/api/shopping/failure",
            pending: "http://localhost:3000/api/shopping/pending",
         },
         notification_url: "https://2a97-186-155-112-111.ngrok.io/api/shopping/webhook",
         taxes: [
            {
               type: "IVA",
               value: 19,
            },
         ],
      });

      req.mercadoPagoInfo = result.body;

      next();
   } catch (error) {
      internalServerError(error, res);
   }
};

export default shoppingConfig;
