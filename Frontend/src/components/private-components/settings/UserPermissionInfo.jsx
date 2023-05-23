import { useState, useEffect } from "react";

// Helpers
import axiosInstance from "../../../helpers/axiosInstance";

// CSS Styles ( SASS Modules )
import inputStyles from "../../../sass/forms/formInputs.module.scss";
import formStyle from "../../../sass/settings/userPermissionInfo.module.scss";
import { Alert } from "../../general-components/Alert";

const UserPermissionInfo = ({ userData, roleOptions }) => {
   const { _id, name, email, address, phone, role } = userData;

   // useState to handle alerts.
   const [alert, setAlert] = useState({});

   // useState to handle checkboxes events.
   const [whichRole, setWhichRole] = useState({ userRole: false, moderatorRole: false });
   const { userRole, moderatorRole } = whichRole;

   // useState to get user info and request role change to the API.
   const [modifyRoleIn, setModifyRoleIn] = useState({ userId: null, role: {} });

   useEffect(() => {
      const assignRole = () => {
         role === "user"
            ? setWhichRole({ userRole: true, moderatorRole: false })
            : setWhichRole({ userRole: false, moderatorRole: true });

         const roleObject = () => roleOptions.find(({ name }) => name === role);
         setModifyRoleIn({ userId: _id, role: roleObject() });
      };

      assignRole();
   }, []);

   // Checkboxes Onclick.
   const handleRoleChange = ({ target: { id } }) => {
      id === "user"
         ? setWhichRole({ userRole: true, moderatorRole: false })
         : setWhichRole({ userRole: false, moderatorRole: true });

      const roleObject = () => roleOptions.find(({ name }) => name === id);
      setModifyRoleIn({ ...modifyRoleIn, role: roleObject() });
   };

   // Change Role => Call API.
   const handleSubmit = async (e) => {
      e.preventDefault();

      setAlert({});

      // API call
      try {
         const { data } = await axiosInstance.put("/manage/user/change-role", modifyRoleIn, {
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         });

         console.log(data);
         setAlert({ msg: data.msg, error: false });
      } catch (error) {
         console.log(error);
         setAlert({ msg: "An error has occurred", error: true });
      }
   };

   return (
      <>
         <form onSubmit={handleSubmit} className={formStyle.form}>
            <h3>Modify user Permissions</h3>

            <div>
               <div className={inputStyles.field}>
                  <label htmlFor="name">Name: </label>
                  <input id="name" name="name" type="text" value={name} readOnly />
               </div>
               <div className={inputStyles.field}>
                  <label htmlFor="email">Email: </label>
                  <input id="email" name="email" type="email" value={email} readOnly />
               </div>
               <div className={inputStyles.field}>
                  <label htmlFor="address">Address: </label>
                  <input id="address" name="address" type="text" value={address} readOnly />
               </div>
               <div className={inputStyles.field}>
                  <label htmlFor="phone">phone: </label>
                  <input id="phone" name="phone" type="text" value={phone} readOnly />
               </div>

               {/* Checkboxes */}
               <div className={formStyle.checkboxesContainer}>
                  <div className={formStyle.checkboxField}>
                     <label htmlFor="user">User:</label>

                     <div className={formStyle.checkboxContainer}>
                        <div
                           id="user"
                           onClick={handleRoleChange}
                           className={`${
                              userRole ? formStyle.myCheckboxActive : formStyle.myCheckboxInactive
                           }`}
                        ></div>
                     </div>
                  </div>

                  <div className={formStyle.checkboxField}>
                     <label htmlFor="moderator">Moderator:</label>

                     <div className={formStyle.checkboxContainer}>
                        <div
                           id="moderator"
                           onClick={handleRoleChange}
                           className={`${
                              moderatorRole
                                 ? formStyle.myCheckboxActive
                                 : formStyle.myCheckboxInactive
                           }`}
                        ></div>
                     </div>
                  </div>
               </div>

               {/* Input Submit */}
               <div className={inputStyles.field}>
                  <input type="submit" value="Change Role" />
               </div>
            </div>
         </form>

         {/* Alerts */}
         {alert.msg && <Alert {...alert} />}
      </>
   );
};

export default UserPermissionInfo;
