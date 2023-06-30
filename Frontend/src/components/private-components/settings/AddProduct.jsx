// CSS Styles ( SASS Modules ).
import mainStyle from "../../../sass/settings/addProduct.module.scss";
import inputStyle from "../../../sass/forms/formInputs.module.scss";

// React Hooks.
import { useState, useRef } from "react";

// React-Icons Library.
import { RiUploadCloudFill, RiLoader3Fill } from "react-icons/ri";

// Axios instance. ==> (helpers).
import axiosInstance from "../../../helpers/axiosInstance";

// Custom-Hook to handle forms.
import { useForm } from "../../../Hooks/useForm";

// Context.
import useCategory from "../../../Hooks/useCategory";

// Generic Components.
import GenericComponents from "../../generic-components";

const AddProducts = () => {
   const [subcategoryList, setSubcategoryList] = useState([]);
   const [imageFile, setImageFile] = useState(null);
   const [previewUrl, setPreviewUrl] = useState(null);
   const [alert, setAlert] = useState({});

   const fileInputRef = useRef(null);
   const loadingRef = useRef(false);

   const { categoryinfoAll } = useCategory();

   const { name, price, description, category, subcategory, setFormState, onInputChange } = useForm(
      {
         name: "",
         price: "",
         description: "",
         category: "",
         subcategory: "",
      }
   );

   const handleSelectCategory = ({ target }) => {
      if (target.value === "-1") {
         setFormState((prev) => ({ ...prev, category: "" }));
         setFormState((prev) => ({ ...prev, subcategory: "" }));
         setSubcategoryList([]);
         return;
      }

      const subCat = categoryinfoAll.filter((c) => c._id === target.value);
      setSubcategoryList(subCat[0].subcategories);
      setFormState((prev) => ({ ...prev, category: subCat[0]._id }));
   };

   const handleSelectSubcategory = ({ target }) => {
      setFormState((prev) => ({ ...prev, subcategory: target.value }));
   };

   const handleImage = ({ target }) => {
      const file = target.files[0];

      setImageFile(file);
      if (target.files.length !== 0) {
         setPreviewUrl(URL.createObjectURL(file));
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      setAlert({});

      if ([name, price, description, category, subcategory].includes("")) {
         return setAlert({ msg: "All fields are required", error: true });
      }

      if (price <= 0) {
         return setAlert({ msg: "Enter a price valid", error: true });
      }

      try {
         loadingRef.current = true;

         const formData = new FormData();
         formData.append("name", name);
         formData.append("price", price);
         formData.append("description", description);
         formData.append("category", category);
         formData.append("subcategory", subcategory);
         formData.append("image", imageFile);

         const { data } = await axiosInstance.post("/manage/product/create-product", formData, {
            headers: {
               "Content-Type": "multipart/form-data",
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         });

         setAlert({ msg: data.msg, error: false });
         setImageFile(null);
         setPreviewUrl(null);
         setFormState({
            name: "",
            price: "",
            description: "",
            category: "",
            subcategory: "",
         });
         fileInputRef.current.value = null;
         loadingRef.current = false;
         setSubcategoryList([]);
      } catch (error) {
         const data = error.response.data.msg || error.response.data.errors[0].msg;
         setAlert({ msg: data, error: true });
         loadingRef.current = false;
      }
   };

   return (
      <div className={mainStyle.mainContainer}>
         <form onSubmit={handleSubmit}>
            <div className={inputStyle.field}>
               <label htmlFor="name">Name:</label>
               <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Product name"
                  autoComplete="off"
                  value={name}
                  onChange={onInputChange}
               />
            </div>

            <div className={inputStyle.field}>
               <label htmlFor="price">Price:</label>
               <input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="Product price"
                  autoComplete="off"
                  value={price}
                  onChange={onInputChange}
               />
            </div>

            <div className={inputStyle.field}>
               <label htmlFor="description">Description:</label>
               <input
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Product description"
                  autoComplete="off"
                  value={description}
                  onChange={onInputChange}
               />
            </div>

            {!loadingRef.current && (
               <div className={mainStyle.selectContainer}>
                  <GenericComponents.SelectOptions
                     handleSelected={handleSelectCategory}
                     arrayOptions={categoryinfoAll}
                     infoTitle="Choose Category"
                  />

                  <GenericComponents.SelectOptions
                     handleSelected={handleSelectSubcategory}
                     arrayOptions={subcategoryList}
                     infoTitle="Choose Subcategory"
                  />
               </div>
            )}

            <div className={mainStyle.uploadContainer}>
               <div className={mainStyle.inputContainer}>
                  <p>
                     <RiUploadCloudFill className={mainStyle.icon} />
                     <span> Add Image</span>
                  </p>
                  <input
                     ref={fileInputRef}
                     type="file"
                     name="imageFile"
                     required
                     accept="image/"
                     onChange={handleImage}
                  />
               </div>

               <div className={mainStyle.imgContainer}>
                  {previewUrl && <img src={previewUrl} alt="image-product" />}
               </div>
            </div>

            {loadingRef.current ? (
               <div className={mainStyle.iconContainer}>
                  <RiLoader3Fill
                     className={`${mainStyle.icon} animate__animated animate__rotateIn animate__infinite`}
                  />
               </div>
            ) : (
               <div className={inputStyle.field}>
                  <input type="submit" value="CREATE PRODUCT" />
               </div>
            )}
         </form>

         {alert.msg && <GenericComponents.Alert {...alert} />}
      </div>
   );
};

export default AddProducts;
