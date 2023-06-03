import inputStyle from "../../../sass/forms/formInputs.module.scss";
import style from "../../../sass/settings/addSubcategory.module.scss";

const AddSubcategory = () => {
   console.log(style);

   return (
      <div className={style.container}>
         <h2>Category</h2>

         <form>
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
               <label htmlFor="description">Name: </label>
               <input
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Subcategory description"
                  autoComplete="off"
               />
            </div>
         </form>
      </div>
   );
};

export default AddSubcategory;
