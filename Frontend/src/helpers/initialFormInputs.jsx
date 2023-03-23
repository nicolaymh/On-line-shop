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

  return {
    registerForm,
    loginForm,
    forgotPasswordForm,
    newPasswordForm,
  };
};

export default initialFormInputs;
