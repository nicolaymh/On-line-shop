// CSS Styles ( SASS Modules )
import inputStyle from "../../../sass/forms/formInputs.module.scss";
import style from "../../../sass/settings/addSubcategory.module.scss";

// React-Hooks.
import { useState } from "react";

// Context
import useCategory from "../../../Hooks/useCategory";

// Generic Components.
import GenericComponents from "../../generic-components/index";

// Axios instance. ==> (helpers).
import axiosInstance from "../../../helpers/axiosInstance";

// Model Object to handle forms. ==> (helpers).
import initialFormInputs from "../../../helpers/initialFormInputs";

// Custom-Hook to handle forms.
import { useForm } from "../../../Hooks/useForm";

const AddSubcategory = () => {
   const { categoryinfoAll } = useCategory();

   const [alert, setAlert] = useState({});

   const { subcategory: initialForm } = initialFormInputs();
   const { name, description, categoryId, setFormState, onInputChange } = useForm(initialForm);

   const handleSelectCategory = ({ target }) => {
      setFormState((prev) => ({ ...prev, categoryId: target.value }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if ([name, description].includes("")) {
         return setAlert({ msg: "All fields are required", error: true });
      }

      if (!categoryId || categoryId === "-1") {
         return setAlert({ msg: "Choose a category", error: true });
      }

      try {
         // Api Call.
         const data = await axiosInstance.post(
            "manage/subcategory/create-subcategory",
            {
               categoryId,
               name,
               description,
            },
            {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
               },
            }
         );

         console.log(data);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
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

         {alert.msg && <GenericComponents.Alert {...alert} />}
      </>
   );
};

export default AddSubcategory;
