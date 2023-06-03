// Context
import useCategory from "../../../Hooks/useCategory";

// CSS Styles ( SASS Modules )
import inputStyle from "../../../sass/forms/formInputs.module.scss";
import style from "../../../sass/settings/addSubcategory.module.scss";

// Components
import SelectOptions from "../../general-components/SelectOptions";

const AddSubcategory = () => {
   const { categoryinfoAll } = useCategory();

   const handleSelectCategory = (e) => {
      console.log(e);
      console.log(categoryinfoAll);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      console.log("Hey");
   };

   return (
      <div className={`${style.container}`}>
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
                  placeholder="Subcategory description"
                  autoComplete="off"
               />
            </div>

            <div>
               <SelectOptions
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
