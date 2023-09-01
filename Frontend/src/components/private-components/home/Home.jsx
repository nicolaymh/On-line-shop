// Assets.
import { carousel1, marketing } from "../../../assets/img";

// CSS Styles ( SASS Modules ).
import style from "../../../sass/home/home.module.scss";

// React-Hooks.
import { useEffect, useState } from "react";

// Context.
import useProducts from "../../../Hooks/useProducts";

// Components.
import GenericComponents from "../../generic-components";
import Discount from "./Marketing";
import Carousel1 from "./Carousel1";

const Home = () => {
   const [loaderHome, setLoaderHome] = useState(false);

   const { ProductsInfo } = useProducts();

   useEffect(() => {
      if (ProductsInfo.length > 0) {
         const timer = setTimeout(() => {
            setLoaderHome(true);
         }, 500);

         return () => {
            clearTimeout(timer);
         };
      }
   }, [ProductsInfo]);

   return (
      <>
         {!loaderHome ? (
            <GenericComponents.Loader />
         ) : (
            <div className={style.container}>
               <Discount imageLink={marketing.discount} />

               <Carousel1 carousel={carousel1} />
            </div>
         )}
      </>
   );
};

export default Home;
