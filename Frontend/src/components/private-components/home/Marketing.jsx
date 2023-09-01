// CSS Styles ( SASS Modules ).
import style from "../../../sass/home/home.module.scss";

const Marketing = ({ imageLink }) => {
   return (
      <div>
         <div className={style.discountContainer}>
            <img src={imageLink} alt="discount-img" />
         </div>
      </div>
   );
};

export default Marketing;
