// Assets.
import { discountImages } from "../../../assets/img";

// Components.
import Discount from "./Discount";
import Contact from "./Contact";

const Marketing = () => {
   return (
      <>
         <Discount discountImages={discountImages} />

         <Contact />
      </>
   );
};

export default Marketing;
