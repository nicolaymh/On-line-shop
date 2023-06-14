// CSS Styles ( SASS Modules ).
import inputStyle from "../../../sass/forms/formInputs.module.scss";
import style from "../../../sass/settings/addSubcategory.module.scss";

// React-Router-Dom.
import { useNavigate } from "react-router-dom";

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
   const { categoryinfoAll, setCategoryinfoAll } = useCategory();

   const navigate = useNavigate();

   const loadingRef = useRef(false);
   const refMount = useRef(false);

   const [formDisabled, setFormDisabled] = useState(false);
   const [subcategoryId, setSubcategoryId] = useState("");
   const [alert, setAlert] = useState({});

   const { subcategory: initialForm } = initialFormInputs();
   const { name, description, categoryId, setFormState, onInputChange } = useForm(initialForm);

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

   useEffect(() => {
      const goHome = setTimeout(() => {
         if (refMount.current) {
            navigate("/shop", { replace: true });
         }
      }, 3000);

      return () => clearTimeout(goHome);
   }, [refMount.current]);

   const handleSelectedSubcategory = ({ target }) => {
      setFormState((prev) => ({ ...prev, categoryId: target.value }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      setAlert({});

      if ([name, description].includes("")) {
         return setAlert({ msg: "All fields are required", error: true });
      }

      if (categoryId === "-1") {
         return setAlert({ msg: "Choose a category", error: true });
      }

      try {
         // Api Call.
         loadingRef.current = true;

         const { data } = await axiosInstance.put(
            `/manage/subcategory/edit-subcategory/${subcategoryId}`,
            {
               name,
               description,
               categoryId,
            },
            {
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
               },
            }
         );

         setAlert({ msg: data.msg, error: false });
         setCategoryinfoAll(data.categoriesSubcategories);
         loadingRef.current = false;
         refMount.current = true;
         setFormDisabled(true);
      } catch (error) {
         const data = error.response.data.msg || error.response.data.errors[0].msg;

         setAlert({ msg: data, error: true });
         loadingRef.current = false;
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
                     <input type="submit" value="EDIT SUBCATEGORY" disabled={formDisabled} />
                  </div>
               )}
            </form>
         </div>

         {alert.msg && <GenericComponents.Alert {...alert} />}
      </>
   );
};

export default EditSubcategory;
