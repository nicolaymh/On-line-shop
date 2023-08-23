import mercadopago from "mercadopago";

const createOrder = async (req, res) => {
   mercadopago.configure({
      access_token: "TEST-5771685154102277-082313-58547c91a65780b08a54128f30a6e56e-1456203269",
   });

   const result = await mercadopago.preferences.create({
      items: [
         {
            title: "laptop Lenovo",
            unit_price: 20000,
            currency_id: "COP",
            quantity: 1,
         },
      ],
      back_urls: {
         success: "http://localhost:3000/api/shopping/success",
         failure: "http://localhost:3000/api/shopping/failure",
         pending: "http://localhost:3000/api/shopping/pending",
      },
      notification_url: "https://38b6-186-155-112-111.ngrok.io/api/shopping/webhook",
   });

   console.log(result);

   res.send(result.body);
};

const receivedWebhook = async (req, res) => {
   const payment = req.query;

   try {
      if (payment.type === payment) {
         const data = await mercadopago.payment.findById(payment[DataTransfer.id]);

         console.log(data);

         // Store in database...
      }

      res.sendStatus(204);
   } catch (error) {
      console.log(error);
      return res.sendStatus(500).json({ error: error.message });
   }
};

export { createOrder, receivedWebhook };
