// CSS Styles ( SASS Modules ).
import mainStyle from "../../../sass/settings/addProduct.module.scss";
import inputStyle from "../../../sass/forms/formInputs.module.scss";

// Hooks.
import { useState } from "react";

// Custom-Hook to handle forms.
import { useForm } from "../../../Hooks/useForm";

// Context.
import useCategory from "../../../Hooks/useCategory";

// Generic Components.
import GenericComponents from "../../generic-components";

const AddProducts = () => {
   const [subcategoryList, setSubcategoryList] = useState([]);

   const { categoryinfoAll } = useCategory();

   const { name, price, description, category, subcategory, setFormState, onInputChange } = useForm(
      {
         name: "",
         price: "",
         description: "",
         category: "",
         subcategory: "",
      }
   );

   console.log(categoryinfoAll);

   const handleSelectCategory = ({ target }) => {
      if (target.value === "-1") {
         setFormState((prev) => ({ ...prev, category: "" }));
         setFormState((prev) => ({ ...prev, subcategory: "" }));
         setSubcategoryList([]);
         return;
      }

      const subCat = categoryinfoAll.filter((c) => c._id === target.value);
      setSubcategoryList(subCat[0].subcategories);
      setFormState((prev) => ({ ...prev, category: subCat[0]._id }));
   };

   const handleSelectSubcategory = ({ target }) => {
      setFormState((prev) => ({ ...prev, subcategory: target.value }));
   };

   return (
      <div className={mainStyle.mainContainer}>
         <form>
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

            <div className={mainStyle.selectContainer}>
               <GenericComponents.SelectOptions
                  handleSelected={handleSelectCategory}
                  arrayOptions={categoryinfoAll}
                  infoTitle="Choose Category"
               />

               <GenericComponents.SelectOptions
                  handleSelected={handleSelectSubcategory}
                  arrayOptions={subcategoryList}
                  infoTitle="Choose Subcategory"
               />
            </div>
         </form>

         <div className={mainStyle.imgContainer}>
            <img src="" />
         </div>
      </div>
   );
};

export default AddProducts;
