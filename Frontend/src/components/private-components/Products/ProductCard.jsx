// CSS Styles ( SASS Modules ).
import style from "../../../sass/products/productCard.module.scss";

const ProductCard = ({ filterProducts, addProductCart }) => {
   return (
      <div className={style.gridContainer}>
         {filterProducts().map((p) => {
            return (
               <div key={p._id} className={style.cardContainer}>
                  <figure className={style.figure}>
                     <img src={p.image.url} alt={p.name} />
                  </figure>

                  <div className={style.priceContainer}>
                     <p className={style.price}>
                        {
                           p.price
                              .toLocaleString("es-CO", {
                                 style: "currency",
                                 currency: "COP",
                              })
                              .split(",")[0]
                        }
                     </p>
                  </div>

                  <div className={style.descriptionContainer}>
                     <p>{p.description}</p>
                  </div>

                  <div className={style.buttonContainer}>
                     <button onClick={() => addProductCart(p._id)}>ADD TO CART</button>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default ProductCard;
