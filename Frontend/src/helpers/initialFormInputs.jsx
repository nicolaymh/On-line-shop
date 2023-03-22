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

  return {
    registerForm,
    loginForm,
    forgotPasswordForm,
  };
};

export default initialFormInputs;
