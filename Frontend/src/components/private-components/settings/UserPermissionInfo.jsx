// CSS Styles ( SASS Modules )
import inputStyles from "../../../sass/forms/formInputs.module.scss";
import formStyle from "../../../sass/settings/userPermissionInfo.module.scss";

const UserPermissionInfo = ({ userData }, { roleOptions }) => {
   const { name, email, address, phone, role } = userData;

   return (
      <form className={formStyle.form}>
         <h3>Modify user Permissions</h3>

         <div>
            <div className={inputStyles.field}>
               <label htmlFor="name">Name: </label>
               <input id="name" name="name" type="text" value={name} />
            </div>
            <div className={inputStyles.field}>
               <label htmlFor="email">Email: </label>
               <input id="email" name="email" type="email" value={email} />
            </div>
            <div className={inputStyles.field}>
               <label htmlFor="address">Address: </label>
               <input id="address" name="address" type="text" value={address} />
            </div>
            <div className={inputStyles.field}>
               <label htmlFor="phone">phone: </label>
               <input id="phone" name="phone" type="text" value={phone} />
            </div>

            <div>
               <div>
                  <label htmlFor="user">User: </label>
                  <input id="user" type="checkbox" />
               </div>

               <div>
                  <label htmlFor="moderator">Moderator: </label>
                  <input id="moderator" type="checkbox" />
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
