// CSS Styles ( SASS Modules ).
import style from "../../../sass/home/home.module.scss";

// react-multi-carousel library.
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

// React - Hooks.
import { useEffect, useState } from "react";

const Carousel2 = ({ ProductsInfo }) => {
   const [lastAddedProducts, setlastAddedProducts] = useState([]);

   useEffect(() => {
      setlastAddedProducts(ProductsInfo.slice(0, 12));
   }, []);

   const responsive = {
      superLargeDesktop: {
         // the naming can be any, depends on you.
         breakpoint: { max: 4000, min: 3000 },
         items: 5,
      },
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 4,
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
      },
   };

   return (
      <div className={style.carousel2Container}>
         <h3>Last Added Products</h3>

         <Carousel responsive={responsive}>
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
      </div>
   );
};

export default Carousel2;
