// CSS Styles ( SASS Modules )
import inputStyle from "../../../sass/forms/formInputs.module.scss";
import style from "../../../sass/settings/addSubcategory.module.scss";

// Context
import useCategory from "../../../Hooks/useCategory";

// Generic Components.
import GenericComponents from "../../generic-components/index";

// Axios instance. ==> (helpers).
import axiosInstance from "../../../helpers/axiosInstance";

const AddSubcategory = () => {
   const { categoryinfoAll } = useCategory();

   const handleSelectCategory = ({ target }) => {
      console.log(target.value);
      console.log(categoryinfoAll);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      console.log(axiosInstance);
   };

   return (
      <div className={`${style.container} animate__animated animate__pulse`}>
         <h2>Add Subcategory</h2>

         <form onSubmit={handleSubmit}>
            <div className={inputStyle.field}>
               <label htmlFor="name">Name: </label>
               <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Subcategory name"
                  autoComplete="off"
               />
            </div>

            <div className={inputStyle.field}>
               <label htmlFor="description">Description: </label>
               <input
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Short description"
                  autoComplete="off"
               />
            </div>

            <div>
               <GenericComponents.SelectOptions
                  handleSelected={handleSelectCategory}
                  arrayOptions={categoryinfoAll}
                  infoTitle="Select Category"
               />
            </div>

            <div className={inputStyle.field}>
               <input type="submit" value="CREATE SUBCATEGORY" />
            </div>
         </form>
      </div>
   );
};

export default AddSubcategory;
