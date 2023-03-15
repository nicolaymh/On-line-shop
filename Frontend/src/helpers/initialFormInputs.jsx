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

  return {
    registerForm,
    loginForm,
  };
};

export default initialFormInputs;
