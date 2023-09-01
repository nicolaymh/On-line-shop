// Assets.
import { carousel1, discount } from "../../../assets/img";

// CSS Styles ( SASS Modules ).
import style from "../../../sass/home/home.module.scss";

// React-Hooks.
import { useEffect, useState } from "react";

// Context.
import useProducts from "../../../Hooks/useProducts";

// Components.
import GenericComponents from "../../generic-components";
import Discount from "./Discount";

const Home = () => {
   const [loader, setLoader] = useState(false);

   const { ProductsInfo } = useProducts();

   useEffect(() => {
      if (ProductsInfo.length > 0) {
         const timer = setTimeout(() => {
            console.log(ProductsInfo);
            setLoader(true);
         }, 500);

         return () => {
            clearTimeout(timer);
         };
      }
   }, [ProductsInfo]);

   return (
      <>
         {!loader ? (
            <GenericComponents.Loader />
         ) : (
            <div className={style.container}>
               <Discount />
            </div>
         )}
      </>
   );
};

export default Home;
