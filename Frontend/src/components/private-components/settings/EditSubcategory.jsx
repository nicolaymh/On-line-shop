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

// Custom-Hook to handle forms.
import { useForm } from "../../../Hooks/useForm";

const EditSubcategory = ({ editSubcategory }) => {
   const { categoryinfoAll, setCategoryinfoAll } = useCategory();

   const { _id, name, description, category: categoryId } = editSubcategory[0];

   console.log(editSubcategory);

   const loadingRef = useRef(false);

   const [alert, setAlert] = useState({});

   const formValues = useForm({ name, description });

   useEffect(() => {
      formValues.setFormState((prev) => ({ ...prev, name, description }));
   }, [editSubcategory]);

   const handleSubmit = async (e) => {
      e.preventDefault();

      setAlert({});

      if ([formValues.name, formValues.description].includes("")) {
         return setAlert({ msg: "All fields are required", error: true });
      }

      // if (!formValues.category || categoryId === "-1") {
      //    return setAlert({ msg: "Choose a category", error: true });
      // }

      try {
         // Api Call
         loadingRef.current = true;

         const { data } = await axiosInstance.put(
            `/manage/subcategory/edit-subcategory/${formValues._id}`,
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

         loadingRef.current = false;
      } catch (error) {
         console.log(error);
      }
   };

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
                     value={formValues.name}
                     onChange={formValues.onInputChange}
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
                     value={formValues.description}
                     onChange={formValues.onInputChange}
                  />
               </div>

               {/* {loadingRef.current ? (
                  <div className={style.iconContainer}>
                     <RiLoader3Fill
                        className={`${style.icon} animate__animated animate__rotateIn animate__infinite`}
                     />
                  </div>
               ) : (
                  <div className={inputStyle.field}>
                     <input type="submit" value="EDIT SUBCATEGORY" />
                  </div>
               )} */}
            </form>
         </div>

         {alert.msg && <GenericComponents.Alert {...alert} />}
      </>
   );
};

export default EditSubcategory;
