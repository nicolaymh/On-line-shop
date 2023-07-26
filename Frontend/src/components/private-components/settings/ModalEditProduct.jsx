// CSS Styles ( SASS Modules ).
import modalStyle from "../../../sass/settings/modalEditProduct.module.scss";
import inputStyle from "../../../sass/forms/formInputs.module.scss";

// React Hooks.
import { useState } from "react";

// React-Icons Library.
import { RiUploadCloudFill } from "react-icons/ri";

// Custom-Hook to handle forms.
import { useForm } from "../../../Hooks/useForm";

// Generic Components.
import GenericComponents from "../../generic-components";

const ModalEditProduct = ({ showModal, categoryinfoAll, infoProductEdit }) => {
   const [subcategoryList, setSubcategoryList] = useState(
      categoryinfoAll.filter((c) => c._id === infoProductEdit.category)[0].subcategories
   );

   const { name, price, description, category, subcategory, setFormState, onInputChange } =
      useForm(infoProductEdit);

   const handleSelectCategory = ({ target }) => {
      if (target.value === "-1") {
         setFormState((prev) => ({
            ...prev,
            category: infoProductEdit.category,
            subcategory: infoProductEdit.subcategory,
         }));
         setSubcategoryList([]);
      }

      const subCat = categoryinfoAll.filter((c) => c._id === target.value);
      setSubcategoryList(subCat[0].subcategories);
      setFormState((prev) => ({ ...prev, category: subCat[0]._id }));
      setFormState((prev) => ({ ...prev, subcategory: "" }));
   };

   const handleSelectSubcategory = ({ target }) => {
      setFormState((prev) => ({ ...prev, subcategory: target.value }));
   };

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
               <label htmlFor="name">Name:</label>
               <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Product name"
                  autoComplete="off"
                  value={name}
                  onChange={onInputChange}
               />
            </div>

            <div className={inputStyle.field}>
               <label htmlFor="price">Price:</label>
               <input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="Product price"
                  autoComplete="off"
                  value={price}
                  onChange={onInputChange}
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
                  value={description}
                  onChange={onInputChange}
               />
            </div>

            <div className={modalStyle.selectContainer}>
               <GenericComponents.SelectOptions
                  handleSelected={handleSelectCategory}
                  arrayOptions={categoryinfoAll}
                  infoTitle="Choose Category"
                  defaultSelection={infoProductEdit.category}
               />

               <GenericComponents.SelectOptions
                  handleSelected={handleSelectSubcategory}
                  arrayOptions={subcategoryList || []}
                  infoTitle="Choose Subcategory"
                  defaultSelection={infoProductEdit.subcategory}
               />
            </div>

            <div className={modalStyle.uploadContainer}>
               <div className={modalStyle.inputContainer}>
                  <p>
                     <RiUploadCloudFill className={modalStyle.icon} /> <span> Add Image</span>
                  </p>
                  <input type="file" name="imageFile" required accept="image/" />
               </div>

               <div className={modalStyle.imgContainer}>
                  <img src="" alt="image-product" />
               </div>
            </div>

            <div className={inputStyle.field}>
               <input type="submit" value="EDIT PRODUCT" />
            </div>
         </form>
      </div>
   );
};

export default ModalEditProduct;
