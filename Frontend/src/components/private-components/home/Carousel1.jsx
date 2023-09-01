// CSS Styles ( SASS Modules ).
import style from "../../../sass/home/home.module.scss";
import styleButtons from "../../../sass/forms/buttonsPreviousNextProducts.module.scss";

// React - Hooks.
import { useEffect, useState } from "react";

const Carousel1 = ({ carousel }) => {
   const [selectedIndex, setSelectedIndex] = useState(0);
   const [loaded, setLoaded] = useState(false);

   useEffect(() => {
      const interval = setInterval(() => {
         changeImage("next");
      }, 2500);

      return () => {
         clearInterval(interval);
      };
   });

   const changeImage = (selectChange) => {
      setLoaded(false);

      setTimeout(() => {
         if (selectChange === "next") {
            selectedIndex < carousel.length - 1
               ? setSelectedIndex((pre) => pre + 1)
               : setSelectedIndex(0);
         }

         if (selectChange === "previous") {
            selectedIndex === 0
               ? setSelectedIndex(carousel.length - 1)
               : setSelectedIndex(selectedIndex - 1);
         }
      }, 1000);
   };

   return (
      <div className={style.carousel1Container}>
         <img
            src={carousel[selectedIndex]}
            alt="img-carousel-1"
            className={loaded ? style.loaded : ""}
            onLoad={() => setLoaded(true)}
         />

         <div className={styleButtons.containerButtons}>
            <button onClick={() => changeImage("previous")}>{"<"}</button>
            <button onClick={() => changeImage("next")}>{">"}</button>
         </div>
      </div>
   );
};

export default Carousel1;
