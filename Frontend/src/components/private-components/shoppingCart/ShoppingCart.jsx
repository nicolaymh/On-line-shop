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
         <section>
            <div>
               <p>
                  Total: <span>{total}</span>
               </p>
            </div>
         </section>
      </main>
   );
};

export default ShoppingCart;
