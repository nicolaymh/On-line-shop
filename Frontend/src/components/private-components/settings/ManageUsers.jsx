import style from "../../../sass/forms/userPermissions.module.scss";

const ManageUsers = () => {
   console.log("From ManageUsers");

   return (
      <section className={style.sectionContainer}>
         <h2>Change user permissions</h2>

         <form>
            <input type="text" placeholder="Search user" />
         </form>
      </section>
   );
};

export default ManageUsers;
