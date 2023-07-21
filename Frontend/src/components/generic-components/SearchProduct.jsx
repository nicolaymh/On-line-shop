// CSS Styles ( SASS Modules ).
import style from "../../sass/forms/inputSearchProduct.module.scss";

const SearchProduct = ({ onSearchChange }) => {
   return (
      <div className={style.inputContainer}>
         <input type="text" placeholder="Search Product" onChange={onSearchChange} />
      </div>
   );
};

export default SearchProduct;
