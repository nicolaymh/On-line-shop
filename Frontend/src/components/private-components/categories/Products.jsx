// Assets.
import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.png";

import style from "../../../sass/products/Products.module.scss";

const Products = () => {
   return (
      <main className={style.mainContainer}>
         <div className={style.titleContainer}>
            <figure>
               <img src={img1} alt="img1-products" />
            </figure>
            <div>
               <h3>Products</h3>
            </div>
            <figure className={style.figure}>
               <img src={img2} alt="img2-products" />
            </figure>
         </div>

         <section>
            <div></div>
         </section>
      </main>
   );
};

export default Products;
