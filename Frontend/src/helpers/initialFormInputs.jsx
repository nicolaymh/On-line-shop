const initialFormInputs = () => {
   const registerForm = {
      name: "",
      password: "",
      confirmPassword: "",
      email: "",
      address: "",
      phone: "",
   };

   const loginForm = {
      email: "",
      password: "",
   };

   const forgotPasswordForm = {
      email: "",
   };

   const newPasswordForm = {
      newPassword: "",
      confirmPassword: "",
   };

   const editUser = {
      name: "",
      email: "",
      address: "",
      phone: "",
      password: "",
   };

   const modifyUserPermission = {
      email: "",
   };

   const subcategory = {
      name: "",
      description: "",
      categoryId: "",
   };

   return {
      registerForm,
      loginForm,
      forgotPasswordForm,
      newPasswordForm,
      editUser,
      modifyUserPermission,
      subcategory,
   };
};

export default initialFormInputs;
