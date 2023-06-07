// CSS Styles ( SASS Modules ).
import style from "../../../sass/settings/manageSubcategories.module.scss";

// React-Router-Dom.
import { useState } from "react";

// Context.
import useCategory from "../../../Hooks/useCategory";

// Generic Components.
import GenericComponents from "../../generic-components/index";

// Components
import privateRoutes from "../index";

const ManageSubcategories = () => {
   const [category, setCategory] = useState({});
   const [subcategories, setSubcategories] = useState([]);

   const { categoryinfoAll } = useCategory();

   const handleSelectedCategory = ({ target }) => {
      if (target.value === "-1") {
         setCategory({});
         setSubcategories([]);
         return;
      }

      const categoryInfo = categoryinfoAll.filter(({ _id }) => _id === target.value);
      const { _id, name, subcategories } = categoryInfo[0];

      setCategory({ _id, name });
      setSubcategories([...subcategories]);
   };

   const handleSelectedSubcategory = ({ target }) => {
      console.log(target.value);
   };

   return (
      <section className={style.manageSubcategoriesContainer}>
         <h4>Manage Subcategories</h4>

         <div className={style.containerSelects}>
            <GenericComponents.SelectOptions
               handleSelected={handleSelectedCategory}
               arrayOptions={categoryinfoAll}
               infoTitle="Add Subcategory"
            />

            {!subcategories[0] ? (
               <GenericComponents.SelectOptions
                  handleSelected={handleSelectedSubcategory}
                  arrayOptions={subcategories}
                  infoTitle="No Subcategory"
               />
            ) : (
               <GenericComponents.SelectOptions
                  handleSelected={handleSelectedSubcategory}
                  arrayOptions={subcategories}
                  infoTitle="Select Subcategory"
               />
            )}
         </div>

         {!category._id && <privateRoutes.AddSubcategory />}
      </section>
   );
};

export default ManageSubcategories;
