// CSS Styles ( SASS Modules ).
import modalStyle from "../../../sass/settings/modalEditProduct.module.scss";

const ModalEditProduct = ({ showModal }) => {
   return (
      <div
         onClick={(e) => e.target.className === "_modalContainer_119cy_1" && showModal()}
         className={modalStyle.modalContainer}
      >
         <h5>Hola Mundo</h5>
      </div>
   );
};

export default ModalEditProduct;
