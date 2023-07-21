// CSS Styles ( SASS Modules ).
import style from "../../sass/forms/buttonsPreviousNextProducts.module.scss";

const PaginationButton = ({ prevPage, nextPage }) => {
   return (
      <div className={style.containerButtons}>
         <button onClick={prevPage}>Previous</button>
         <button onClick={nextPage}>Next</button>
      </div>
   );
};

export default PaginationButton;
