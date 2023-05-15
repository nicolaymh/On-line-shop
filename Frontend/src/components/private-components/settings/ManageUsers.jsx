// CSS Styles ( SASS Modules )
import style from "../../../sass/forms/userPermissions.module.scss";
import formStyle from "../../../sass/forms/formInputs.module.scss";

const ManageUsers = () => {
   console.log("From ManageUsers");

   return (
      <section className={style.sectionContainer}>
         <h3>Modify user Permission</h3>

         <form>
            <div className={formStyle.field}>
               <label htmlFor="">Email: </label>
               <input type="email" placeholder="Search User" />
            </div>

            <div className={formStyle.field}>
               <input type="submit" value="Find User" />
            </div>
         </form>
      </section>
   );
};

export default ManageUsers;
