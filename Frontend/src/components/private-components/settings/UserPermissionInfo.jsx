// CSS Styles ( SASS Modules )
import inputStyles from "../../../sass/forms/formInputs.module.scss";
import formStyle from "../../../sass/settings/userPermissionInfo.module.scss";

const UserPermissionInfo = () => {
   return (
      <form className={formStyle.form}>
         <h3>Modify user Permissions</h3>

         <div>
            <div className={inputStyles.field}>
               <label htmlFor="name">Name: </label>
               <input id="name" name="name" type="text" />
            </div>
            <div className={inputStyles.field}>
               <label htmlFor="email">Email: </label>
               <input id="email" name="email" type="email" />
            </div>
            <div className={inputStyles.field}>
               <label htmlFor="address">Address: </label>
               <input id="address" name="address" type="text" />
            </div>
            <div className={inputStyles.field}>
               <label htmlFor="phone">phone: </label>
               <input id="phone" name="phone" type="text" />
            </div>

            <div></div>

            <div className={inputStyles.field}>
               <input type="submit" value="Go Back" />
            </div>
         </div>
      </form>
   );
};

export default UserPermissionInfo;
