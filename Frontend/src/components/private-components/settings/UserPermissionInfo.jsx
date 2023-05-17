// CSS Styles ( SASS Modules )
import { useState, useEffect } from "react";
import inputStyles from "../../../sass/forms/formInputs.module.scss";
import formStyle from "../../../sass/settings/userPermissionInfo.module.scss";

const UserPermissionInfo = ({ userData, roleOptions }) => {
   const { _id, name, email, address, phone, role } = userData;

   const [whichRole, setWhichRole] = useState({ userRole: false, moderatorRole: false });
   const { userRole, moderatorRole } = whichRole;

   useEffect(() => {
      const assignRole = () => {
         role === "user"
            ? setWhichRole({ ...whichRole, userRole: true })
            : setWhichRole({ ...whichRole, moderatorRole: true });
      };

      assignRole();
   }, []);

   // Checkboxes Onclick
   const changetoRoleUser = () => setWhichRole({ userRole: true, moderatorRole: false });
   const changetoRoleModerator = () => setWhichRole({ userRole: false, moderatorRole: true });

   return (
      <form className={formStyle.form}>
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

            <div className={formStyle.checkboxesContainer}>
               <div className={formStyle.checkboxField}>
                  <label onClick={changetoRoleUser} htmlFor="user">
                     User:
                  </label>

                  <div onClick={changetoRoleUser} className={formStyle.checkboxContainer}>
                     <div
                        className={`${
                           userRole ? formStyle.myCheckboxActive : formStyle.myCheckboxInactive
                        }`}
                     ></div>
                  </div>
               </div>

               <div className={formStyle.checkboxField}>
                  <label onClick={changetoRoleModerator} htmlFor="moderator">
                     Moderator:
                  </label>

                  <div onClick={changetoRoleModerator} className={formStyle.checkboxContainer}>
                     <div
                        className={`${
                           moderatorRole ? formStyle.myCheckboxActive : formStyle.myCheckboxInactive
                        }`}
                     ></div>
                  </div>
               </div>
            </div>

            <div className={inputStyles.field}>
               <input type="submit" value="Go Back" />
            </div>
         </div>
      </form>
   );
};

export default UserPermissionInfo;
