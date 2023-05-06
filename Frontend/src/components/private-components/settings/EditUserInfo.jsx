import { useEffect, useRef, useState } from "react";

import initialFormInputs from "../../../helpers/initialFormInputs";

// Custom Hook
import { useForm } from "../../../Hooks/useForm";

import axiosInstance from "../../../helpers/axiosInstance";

// CSS formStyle ( SASS Modules )
import formStyle from "../../../sass/forms/generalFormStyle.module.scss";
import containerStyle from "../../../sass/forms/editUser.module.scss";

// Assets
import registerImage from "../../../assets/images/register-image.png";

// Components
import { Alert } from "../../general-components/Alert";

// Context
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const EditUserInfo = () => {
   const { auth, setAuth } = useAuth();

   const navigate = useNavigate();

   const refMount = useRef(false);
   const [formDisabled, setFormDisabled] = useState(false);

   useEffect(() => {
      const goHome = setTimeout(() => {
         if (!refMount.current) return;

         navigate("/shop", { replace: true });
      }, 4000);

      return () => clearTimeout(goHome);
   }, [refMount.current]);

   const { editUser: initialForm } = initialFormInputs();

   const [alert, setAlert] = useState({ msg: "", error: false });

   const { name, email, address, phone, password, onInputChange } = useForm({
      ...initialForm,
      name: auth.name,
      email: auth.email,
      address: auth.address,
      phone: auth.phone,
   });

   const handleSubmit = async (e) => {
      e.preventDefault();

      // Form Validations
      if ([name, email, address, phone, password].includes("")) {
         return setAlert({ msg: "All fields are required", error: true });
      }

      if (password.length < 6) {
         return setAlert({ msg: "The password must be at least 6 characters", error: true });
      }

      if (address.length < 8) {
         return setAlert({ msg: "Address is required and min 8 characters", error: true });
      }

      if (phone.length < 10) {
         return setAlert({ msg: "Phone is required and min 10 characters", error: true });
      }

      try {
         // API Call
         const token = localStorage.getItem("token");

         const config = {
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
            },
         };

         const { data } = await axiosInstance.put(
            "/users/edit-info",
            { name, email, address, phone, password },
            config
         );
         setAlert({ msg: data.msg, error: false });

         setAuth(data.user);

         refMount.current = true;
         setFormDisabled(true);
      } catch (error) {
         const data = error.response.data.msg || error.response.data.errors[0].msg;
         setAlert({ msg: data, error: true });
      }
   };

   return (
      <div className={containerStyle.editUserContainer}>
         <form onSubmit={handleSubmit} className={formStyle.form}>
            {alert.msg && <Alert {...alert} />}

            <div className={formStyle.field}>
               <label htmlFor="name">Name: </label>

               <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  autoComplete="off"
                  value={name}
                  onChange={onInputChange}
                  disabled={formDisabled}
               />
            </div>

            <div className={formStyle.field}>
               <label htmlFor="email">E-mail: </label>

               <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your e-mail"
                  autoComplete="off"
                  value={email}
                  onChange={onInputChange}
                  disabled={formDisabled}
               />
            </div>

            <div className={formStyle.field}>
               <label htmlFor="address">Address: </label>

               <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Your Address"
                  autoComplete="off"
                  value={address}
                  onChange={onInputChange}
                  disabled={formDisabled}
               />
            </div>

            <div className={formStyle.field}>
               <label htmlFor="phone">Phone: </label>

               <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your Tel"
                  autoComplete="off"
                  value={phone}
                  onChange={onInputChange}
                  disabled={formDisabled}
               />
            </div>
            <div className={formStyle.field}>
               <label htmlFor="password">Password: </label>

               <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  autoComplete="off"
                  value={password}
                  onChange={onInputChange}
                  disabled={formDisabled}
               />
            </div>

            <div className={formStyle.field}>
               <input type="submit" value="EDIT INFO" disabled={formDisabled} />
            </div>
         </form>

         <div className={containerStyle.imgContainer}>
            <img height="100%" src={registerImage} alt="register-image" />
         </div>
      </div>
   );
};

export default EditUserInfo;
