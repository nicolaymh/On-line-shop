// Assets.
import { discountImages } from "../../../assets/img";

// Components.
import Discount from "./Discount";
import Contact from "./Contact";
import Footer from "./Footer";

const Marketing = () => {
   return (
      <>
         <Discount discountImages={discountImages} />

         <Contact />

         <Footer />
      </>
   );
};

export default Marketing;
