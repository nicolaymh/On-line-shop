import style from "../../../sass/shoppingCart/shoppingCart.module.scss";

// React Hooks
import { useEffect } from "react";

const Prices = ({ cart, prices, setPrices }) => {
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
   }, []);

   return (
      <section className={style.sectionPrices}>
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
            <button>Make Purchase</button>
         </div>
      </section>
   );
};

export default Prices;
