import style from "../../../sass/shoppingCart/shoppingCart.module.scss";

// Context.
import useShoppingCart from "../../../Hooks/useShoppingCart";

const ShoppingCart = () => {
   const { cart } = useShoppingCart();

   const total = cart.reduce((accumulator, product) => {
      return accumulator + product.total;
   }, 0);

   console.log(cart);
   console.log(
      total
         .toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
         })
         .split(",")[0]
   );

   return (
      <main className={style.mainContainer}>
         <section className={style.sectionProducts}></section>
         <section className={style.sectionPrices}>
            <div className={style.containerPrices}>
               <p>
                  Total price: <span>{total}</span>
               </p>
               <p>
                  TAX: <span>1234</span>
               </p>
               <p>
                  Total: <span>123456</span>
               </p>
            </div>

            <div className={style.containerButton}>
               <button>Make Purchase</button>
            </div>
         </section>
      </main>
   );
};

export default ShoppingCart;
