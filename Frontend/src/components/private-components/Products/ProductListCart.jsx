// CSS Styles ( SASS Modules ).
import style from "../../../sass/shoppingCart/shoppingCart.module.scss";

// React-Icons.
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";

const ProductListCart = ({ cart }) => {
   return (
      <section className={style.sectionProducts}>
         {cart.map((p) => {
            const { _id, name, price, image, quantity, total } = p;

            return (
               <article key={_id}>
                  <div className={style.imgNameContainer}>
                     <figure>
                        <img src={image.url} alt={`image-${image.url}`} />
                     </figure>

                     <p>{name}</p>
                  </div>

                  <div className={style.addSubtractContainer}>
                     <div className={style.iconsContainer}>
                        <HiMinusCircle className={style.icons} />
                        <p className={style.quantity}>{quantity}</p>
                        <HiPlusCircle className={style.icons} />
                     </div>

                     <div className={style.pricesContainer}>
                        <p className={style.price}>{total}</p>
                        <p className={style.price}>{`${price} / per item`}</p>
                     </div>
                  </div>
               </article>
            );
         })}
      </section>
   );
};

export default ProductListCart;
