import { useState } from "react";

import useCategory from "../../../Hooks/useCategory";

import style from "../../../sass/settings/manageSubcategories.module.scss";
import SelectOptions from "../../general-components/SelectOptions";

const ManageSubcategories = () => {
   const [category, setCategory] = useState({});
   const [subcategories, setSubcategories] = useState([]);

   const { categoryinfoAll } = useCategory();

   console.log(categoryinfoAll);

   const handleSelected = ({ target }) => {
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

   return (
      <section className={style.manageSubcategoriesContainer}>
         <h4>Manage Subcategories</h4>

         <div>
            <SelectOptions
               handleSelected={handleSelected}
               arrayOptions={categoryinfoAll}
               infoTitle="--Select-Category--"
            />
         </div>
      </section>
   );
};

export default ManageSubcategories;
