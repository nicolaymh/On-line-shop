// CSS Styles ( SASS Modules ).
import inputStyle from "../../../sass/forms/formInputs.module.scss";
import style from "../../../sass/settings/addSubcategory.module.scss";

// React-Hooks.
import { useState, useRef, useEffect } from "react";

// React-Icons Library.
import { RiLoader3Fill } from "react-icons/Ri";

// Context.
import useCategory from "../../../Hooks/useCategory";

// Axios instance. ==> (helpers).
import axiosInstance from "../../../helpers/axiosInstance";

// Generic Components.
import GenericComponents from "../../generic-components/index";

// Model Object to handle forms. ==> (helpers).
import initialFormInputs from "../../../helpers/initialFormInputs";

// Custom-Hook to handle forms.
import { useForm } from "../../../Hooks/useForm";

const EditSubcategory = ({ editSubcategory }) => {
   const [subcategoryId, setSubcategoryId] = useState("");

   const loadingRef = useRef(false);

   const { categoryinfoAll } = useCategory();

   const { subcategory: initialForm } = initialFormInputs();
   const { name, description, categoryId, setFormState, onInputChange } = useForm(initialForm);

   const handleSelectedSubcategory = ({ target }) => {
      setFormState((prev) => ({ ...prev, categoryId: target.value }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("submit");
   };

   useEffect(() => {
      const assignData = () => {
         setSubcategoryId(editSubcategory._id);
         setFormState((prev) => ({
            ...prev,
            name: editSubcategory.name,
            description: editSubcategory.description,
            categoryId: editSubcategory.category,
         }));
      };

      assignData();
   }, [editSubcategory]);

   return (
      <>
         <div className={`${style.container} animate__animated animate__pulse`}>
            <h2>Edit Subcategory</h2>

            <form onSubmit={handleSubmit}>
               <div className={inputStyle.field}>
                  <label htmlFor="name">Name: </label>
                  <input
                     id="name"
                     name="name"
                     type="text"
                     placeholder="Subcategory name"
                     autoComplete="off"
                     value={name}
                     onChange={onInputChange}
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
                     value={description}
                     onChange={onInputChange}
                  />
               </div>

               <div>
                  <GenericComponents.SelectOptions
                     defaultSelection={editSubcategory.category}
                     handleSelected={handleSelectedSubcategory}
                     arrayOptions={categoryinfoAll}
                     infoTitle="Select Category"
                  />
               </div>

               {loadingRef.current ? (
                  <div className={style.iconContainer}>
                     <RiLoader3Fill
                        className={`${style.icon} animate__animated animate__rotateIn animate__infinite`}
                     />
                  </div>
               ) : (
                  <div className={inputStyle.field}>
                     <input type="submit" value="EDIT SUBCATEGORY" />
                  </div>
               )}
            </form>
         </div>

         {alert.msg && <GenericComponents.Alert {...alert} />}
      </>
   );
};

export default EditSubcategory;
