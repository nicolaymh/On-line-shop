// CSS Styles ( SASS Modules ).
import style from "../../../sass/shoppingCart/shoppingCart.module.scss";

// Axios instance. ==> (helpers).
import axiosInstance from "../../../helpers/axiosInstance";

// React Hooks
import { useEffect, useState } from "react";

// Generic Components.
import GenericComponents from "../../generic-components";

const Prices = ({ cart, prices, setPrices, cleantCart }) => {
   const [ShowButtonPay, setShowButtonPay] = useState(false);
   const [mercadopagoLink, setMercadopagoLink] = useState("");
   const [alert, setAlert] = useState({});

   useEffect(() => {
      const calculatePrice = () => {
         let total = cart.reduce((accumulator, product) => {
            return accumulator + product.total;
         }, 0);

         let grossPrice = total;
         let tax = (total * 19) / 100;
         let finalPrice = total + tax;

         setPrices({ grossPrice, tax, finalPrice });
      };

      calculatePrice();
   }, [cart]);

   const handleCreateOrder = async () => {
      setAlert({});

      try {
         const { data } = await axiosInstance.post(
            "/shopping/create-order",
            { cart, prices },
            {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
               },
            }
         );

         console.log(data);

         setMercadopagoLink(data.init_point);
         setShowButtonPay(true);
      } catch (error) {
         console.log(error);
         const data = error.response.data.msg;
         setAlert({ msg: data, error: true });
      }
   };

   const handlePay = () => (window.location.href = mercadopagoLink);

   return (
      <section className={style.sectionPrices}>
         <div className={style.containerButton}>
            <button onClick={cleantCart} className={style.cleanCart}>
               Clean Cart
            </button>
         </div>

         <div className={style.containerPrices}>
            <p>
               Total price:{" "}
               <span>
                  {
                     prices.grossPrice
                        .toLocaleString("es-CO", {
                           style: "currency",
                           currency: "COP",
                        })
                        .split(",")[0]
                  }
               </span>
            </p>
            <p>
               TAX (19%):{" "}
               <span>
                  {
                     prices.tax
                        .toLocaleString("es-CO", {
                           style: "currency",
                           currency: "COP",
                        })
                        .split(",")[0]
                  }
               </span>
            </p>
            <p>
               Total:{" "}
               <span>
                  {
                     prices.finalPrice
                        .toLocaleString("es-CO", {
                           style: "currency",
                           currency: "COP",
                        })
                        .split(",")[0]
                  }
               </span>
            </p>
         </div>

         <div className={style.containerButton}>
            {!ShowButtonPay && <button onClick={handleCreateOrder}>Create Order</button>}

            {ShowButtonPay && (
               <button className={style.buttonPay} onClick={handlePay}>
                  Pay
               </button>
            )}
         </div>

         {alert.msg && <GenericComponents.Alert {...alert} />}
      </section>
   );
};

export default Prices;
