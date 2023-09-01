// Assets.
import { discount } from "../../../assets/img";

// CSS Styles ( SASS Modules ).
import style from "../../../sass/home/home.module.scss";

const Discount = () => {
   return (
      <div>
         <div className={style.discountContainer}>
            <img src={discount} alt="discount-img" />
         </div>
      </div>
   );
};

export default Discount;
