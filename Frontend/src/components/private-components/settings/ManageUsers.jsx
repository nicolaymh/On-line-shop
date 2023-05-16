import initialFormInputs from "../../../helpers/initialFormInputs";

import axiosInstance from "../../../helpers/axiosInstance";

// CSS Styles ( SASS Modules )
import style from "../../../sass/forms/userPermissions.module.scss";
import formStyle from "../../../sass/forms/formInputs.module.scss";
import { useForm } from "../../../Hooks/useForm";

const ManageUsers = () => {
   const { modifyUserPermission: initialForm } = initialFormInputs();
   const { email, onInputChange } = useForm(initialForm);

   const handleSubmit = async (e) => {
      e.preventDefault();

      if ([email].includes("")) {
         return console.log("All field are required");
      }

      // Api Call
      try {
         const data = await axiosInstance.get(`manage/user/${email || "@"}`, {
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         });

         console.log(data);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <section className={style.sectionContainer}>
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
      </section>
   );
};

export default ManageUsers;
