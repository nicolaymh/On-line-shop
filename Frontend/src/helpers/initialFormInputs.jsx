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
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  return {
    registerForm,
    loginForm,
    forgotPasswordForm,
    newPasswordForm,
    editUser,
  };
};

export default initialFormInputs;
