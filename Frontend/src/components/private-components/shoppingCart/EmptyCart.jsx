// Assets.
import { shoppingCartImage } from "../../../assets/img";

const EmptyCart = () => {
   return (
      <figure>
         <img src={shoppingCartImage} alt="Empty-cart" />
      </figure>
   );
};

export default EmptyCart;
