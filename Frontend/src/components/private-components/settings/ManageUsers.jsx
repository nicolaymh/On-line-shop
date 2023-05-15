// CSS Styles ( SASS Modules )
import style from "../../../sass/forms/userPermissions.module.scss";
import formStyle from "../../../sass/forms/generalFormStyle.module.scss";

const ManageUsers = () => {
   console.log("From ManageUsers");

   return (
      <section className={style.sectionContainer}>
         <div className={style.searchUser}>
            <h2>Change user permissions</h2>

            <form className={formStyle.form}>
               <div className={formStyle.field}>
                  <label htmlFor="">Email:</label>

                  <input type="text" placeholder="Search user" />
               </div>

               <div className={formStyle.field}>
                  <input type="submit" value="LOG IN" />
               </div>
            </form>
         </div>
      </section>
   );
};

export default ManageUsers;
