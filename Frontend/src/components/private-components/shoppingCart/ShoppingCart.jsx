import useShoppingCart from "../../../Hooks/useShoppingCart";

const ShoppingCart = () => {
   const { cart } = useShoppingCart();

   console.log(cart);

   return (
      <main>
         <section>
            <div>
               <p>
                  Total: <span></span>
               </p>
            </div>
         </section>
      </main>
   );
};

export default ShoppingCart;
