// CSS Styles ( SASS Modules ).
import modalStyle from "../../../sass/settings/modalEditProduct.module.scss";
import inputStyle from "../../../sass/forms/formInputs.module.scss";

// Components.
import GenericComponents from "../../generic-components";

const ModalEditProduct = ({ showModal }) => {
   const handleSelectCategory = () => {};

   const handleSelectSubcategory = () => {};

   return (
      <div
         onClick={(e) => e.target.classList.contains(modalStyle.modalContainer) && showModal()}
         className={modalStyle.modalContainer}
      >
         <form>
            <div>
               <h4>Edit Product</h4>
            </div>

            <div className={inputStyle.field}>
               <label htmlFor="name">Name</label>
               <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Product name"
                  autoComplete="off"
               />
            </div>

            <div className={inputStyle.field}>
               <label htmlFor="price">Price</label>
               <input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="Product price"
                  autoComplete="off"
               />
            </div>

            <div className={inputStyle.field}>
               <label htmlFor="description">Description:</label>
               <input
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Product description"
                  autoComplete="off"
               />
            </div>

            <div className={modalStyle.selectContainer}>
               <GenericComponents.SelectOptions
                  handleSelected={handleSelectCategory}
                  arrayOptions={[]}
                  infoTitle="Choose Category"
               />

               <GenericComponents.SelectOptions
                  handleSelected={handleSelectSubcategory}
                  arrayOptions={[]}
                  infoTitle="Choose Subcategory"
               />
            </div>
         </form>
      </div>
   );
};

export default ModalEditProduct;
