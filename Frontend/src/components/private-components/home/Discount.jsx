// CSS Styles ( SASS Modules ).
import style from "../../../sass/home/home.module.scss";

const Discount = ({ discountImages = [] }) => {
   return (
      <section>
         {discountImages.map((img) => (
            <div key={img} className={style.discountContainer}>
               <img src={img} alt="discount-img" />
            </div>
         ))}
      </section>
   );
};

export default Discount;
