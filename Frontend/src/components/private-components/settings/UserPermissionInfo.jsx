const UserPermissionInfo = () => {
   return (
      <form>
         <div>
            <label htmlFor="name">Name: </label>
            <input id="name" name="name" type="text" />
         </div>
         <div>
            <label htmlFor="email">Email: </label>
            <input id="email" name="email" type="email" />
         </div>
         <div>
            <label htmlFor="address">Address: </label>
            <input id="address" name="address" type="text" />
         </div>
         <div>
            <label htmlFor="phone">phone: </label>
            <input id="phone" name="phone" type="tel" />
         </div>
      </form>
   );
};

export default UserPermissionInfo;
