import { useState } from "react";

// Custom hook for forms.
import { useForm } from "../../../Hooks/useForm";

// Helpers
import initialFormInputs from "../../../helpers/initialFormInputs";
import axiosInstance from "../../../helpers/axiosInstance";

// Components
import { Alert } from "../../general-components/Alert";

// CSS Styles ( SASS Modules )
import style from "../../../sass/forms/userPermissions.module.scss";
import formStyle from "../../../sass/forms/formInputs.module.scss";
import UserPermissionInfo from "./UserPermissionInfo";

const ManageUsers = () => {
   const [userInfo, setUserInfo] = useState({});

   const [alert, setAlert] = useState({});

   const { modifyUserPermission: initialForm } = initialFormInputs();
   const { email, onInputChange } = useForm(initialForm);

   const handleSubmit = async (e) => {
      e.preventDefault();

      setAlert({});

      if ([email].includes("")) {
         return setAlert({ msg: "Enter a valid email", error: true });
      }

      // Api Call
      try {
         const { data } = await axiosInstance.get(`manage/user/${email || "@"}`, {
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         });

         setUserInfo(data);
      } catch (error) {
         setUserInfo({});

         const data = error.response.data.msg || error.response.data.errors[0].msg;

         setAlert({ msg: data, error: true });
      }
   };

   return (
      <section className={style.sectionContainer}>
         {userInfo.userData ? (
            <UserPermissionInfo {...userInfo} />
         ) : (
            <>
               <h3>Modify user Permissions</h3>

               <form onSubmit={handleSubmit}>
                  <div className={formStyle.field}>
                     <label htmlFor="email">Email: </label>
                     <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Search user by email"
                        autoComplete="off"
                        value={email}
                        onChange={onInputChange}
                     />
                  </div>

                  <div className={formStyle.field}>
                     <input type="submit" value="Find User" />
                  </div>
               </form>

               {alert.msg && <Alert {...alert} />}
            </>
         )}
      </section>
   );
};

export default ManageUsers;
