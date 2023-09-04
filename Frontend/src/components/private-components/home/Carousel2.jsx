// CSS Styles ( SASS Modules ).
import style from "../../../sass/home/home.module.scss";

// react-multi-carousel library.
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import responsive from "../../../helpers/responsive";

// React - Hooks.
import { useEffect, useState } from "react";

// Context.
import useShoppingCart from "../../../Hooks/useShoppingCart";

const Carousel2 = ({ ProductsInfo }) => {
   const color = [style.color1, style.color2, style.color3];

   const [lastAddedProducts, setlastAddedProducts] = useState([]);
   const [titleColorIndex, setTitleColorIndex] = useState(0);

   const { addProductCart } = useShoppingCart();

   useEffect(() => {
      setlastAddedProducts(ProductsInfo.slice(0, 12));
   }, []);

   useEffect(() => {
      const interval = setInterval(() => {
         setTitleColorIndex((prev) => (prev !== color.length - 1 ? prev + 1 : 0));
      }, 1000);

      return () => clearInterval(interval);
   }, []);

   return (
      <section className={style.carousel2Container}>
         <h3 className={color[titleColorIndex]}>Last Added Products</h3>

         <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            rewind={true}
            infinite={true}
            focusOnSelect={true}
         >
            {lastAddedProducts.map((p) => {
               return (
                  <div key={p._id} className={style.cardContainer}>
                     <div className={style.imgContainer}>
                        <img src={p.image.url} alt="product-img" />
                     </div>

                     <div className={style.priceContainer}>
                        <p>
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
         </Carousel>
      </section>
   );
};

export default Carousel2;
