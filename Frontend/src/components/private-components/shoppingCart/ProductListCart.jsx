// CSS Styles ( SASS Modules ).
import style from "../../../sass/shoppingCart/shoppingCart.module.scss";

// React-Icons.
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ProductListCart = ({ cart, addProductCart, removeProductCart }) => {
   const priceFormat = (price) => {
      return price
         .toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
         })
         .split(",")[0];
   };

   return (
      <section
         className={`${style.sectionProducts} ${cart.length <= 3 && style.lessThreeProducts}`}
      >
         {cart.map((p) => {
            const { _id, name, price, image, quantity, total } = p;

            return (
               <article key={_id}>
                  <div className={style.imgNameContainer}>
                     <figure>
                        <img src={image.url} alt={`image-${name}`} />
                     </figure>

                     <p>{name}</p>
                  </div>

                  <div className={style.addSubtractContainer}>
                     <div className={style.iconsContainer}>
                        <HiMinusCircle className={style.icons} />
                        <p className={style.quantity}>{quantity}</p>
                        <HiPlusCircle
                           onClick={() => {
                              addProductCart(_id);
                           }}
                           className={style.icons}
                        />
                     </div>

                     <div className={style.pricesContainer}>
                        <p className={style.price}>{priceFormat(total)}</p>
                        <p className={style.price}>{`${priceFormat(price)} / per item`}</p>
                     </div>

                     <div className={style.removeContainer}>
                        <RiDeleteBin6Fill
                           className={style.iconRemove}
                           onClick={() => {
                              removeProductCart(_id);
                           }}
                        />
                     </div>
                  </div>
               </article>
            );
         })}
      </section>
   );
};

export default ProductListCart;
