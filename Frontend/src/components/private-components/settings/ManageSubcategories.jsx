// CSS Styles ( SASS Modules ).
import style from "../../../sass/settings/manageSubcategories.module.scss";

// React-Router-Dom.
import { useState } from "react";

// Context.
import useCategory from "../../../Hooks/useCategory";

// Generic Components.
import GenericComponents from "../../generic-components/index";

// Components
import AddSubcategory from "./AddSubcategory";
import EditSubcategory from "./EditSubcategory";

const ManageSubcategories = () => {
   const [category, setCategory] = useState({});
   const [subcategories, setSubcategories] = useState([]);
   const [editSubcategory, setEditSubcategory] = useState([]);

   const { categoryinfoAll } = useCategory();

   // Handle Category Select
   const handleSelectedCategory = ({ target }) => {
      if (target.value === "-1") {
         setCategory({});
         setSubcategories([]);
         setEditSubcategory([]);
         return;
      }

      setCategory({});
      setSubcategories([]);
      setEditSubcategory([]);

      const categoryInfo = categoryinfoAll.filter(({ _id }) => _id === target.value);
      const { _id, name, subcategories } = categoryInfo[0];

      setCategory({ _id, name });
      setSubcategories([...subcategories]);
   };

   // Handle Subcategory Select.
   const handleSelectedSubcategory = ({ target }) => {
      const subcategory = subcategories.filter((sub) => sub._id === target.value);
      setEditSubcategory(subcategory);
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
         {!category._id && <AddSubcategory />}

         {editSubcategory[0] && <EditSubcategory editSubcategory={editSubcategory[0]} />}
      </section>
   );
};

export default ManageSubcategories;
