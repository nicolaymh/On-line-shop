import { useState } from "react";

// Custom Hook
import { useForm } from "../../../Hooks/useForm";

import initialFormInputs from "../../../helpers/initialFormInputs";

// CSS formStyle ( SASS Modules )
import formStyle from "../../../sass/forms/generalFormStyle.module.scss";
import containerStyle from "../../../sass/forms/editUser.module.scss";

// Assets
import registerImage from "../../../assets/images/register-image.png";

// Components
import { Alert } from "../../general-components/Alert";

// Context
import useAuth from "../../../Hooks/useAuth";

const EditUserInfo = () => {
  const { auth } = useAuth();

  const { editUser: initialForm } = initialFormInputs();

  const [alert, setAlert] = useState({ msg: "", error: false });

  const {
    name,
    email,
    address,
    phone,
    oldPassword,
    newPassword,
    confirmNewPassword,
    onInputChange,
  } = useForm({
    ...initialForm,
    name: auth.name,
    email: auth.email,
    address: auth.address,
    phone: auth.phone,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Validations
    if ([name, email, address, phone, oldPassword, newPassword, confirmNewPassword].includes("")) {
      return setAlert({ msg: "All fields are required", error: true });
    }

    if (newPassword !== confirmNewPassword) {
      return setAlert({
        msg: "New-Password and Confirm-New-Password must be the same",
        error: true,
      });
    }

    if (newPassword.length < 6) {
      return setAlert({ msg: "The password must be at least 6 characters", error: true });
    }

    if (address.length < 8) {
      return setAlert({ msg: "Address is required and min 8 characters", error: true });
    }

    if (phone.length < 10) {
      return setAlert({ msg: "Phone is required and min 10 characters", error: true });
    }

    console.log("ok");

    // API Call
  };

  return (
    <div className={containerStyle.editUserContainer}>
      <form onSubmit={handleSubmit} className={formStyle.form}>
        {alert.msg && <Alert {...alert} />}

        <div className={formStyle.field}>
          <label htmlFor="name">Name: </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Full Name"
            autoComplete="off"
            value={name}
            onChange={onInputChange}
          />
        </div>

        <div className={formStyle.field}>
          <label htmlFor="email">E-mail: </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your e-mail"
            autoComplete="off"
            value={email}
            onChange={onInputChange}
          />
        </div>

        <div className={formStyle.field}>
          <label htmlFor="address">Address: </label>

          <input
            id="address"
            name="address"
            type="text"
            placeholder="Your Address"
            autoComplete="off"
            value={address}
            onChange={onInputChange}
          />
        </div>

        <div className={formStyle.field}>
          <label htmlFor="phone">Phone: </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Your Tel"
            autoComplete="off"
            value={phone}
            onChange={onInputChange}
          />
        </div>
        <div className={formStyle.field}>
          <label htmlFor="oldPassword">Old-Password: </label>

          <input
            id="oldPassword"
            name="oldPassword"
            type="password"
            placeholder="Old Password"
            autoComplete="off"
            value={oldPassword}
            onChange={onInputChange}
          />
        </div>

        <div className={formStyle.field}>
          <label htmlFor="newPassword">New-password: </label>

          <input
            id="newPassword"
            name="newPassword"
            type="password"
            placeholder="Create a new password"
            autoComplete="off"
            value={newPassword}
            onChange={onInputChange}
          />
        </div>

        <div className={formStyle.field}>
          <label htmlFor="confirmNewPassword">Confirm-New-Password: </label>

          <input
            id="confirmNewPassword"
            name="confirmNewPassword"
            type="password"
            placeholder="Confirm New Password"
            autoComplete="off"
            value={confirmNewPassword}
            onChange={onInputChange}
          />
        </div>

        <div className={formStyle.field}>
          <input type="submit" value="EDIT INFO" />
        </div>
      </form>

      <div className={containerStyle.imgContainer}>
        <img height="100%" src={registerImage} alt="register-image" />
      </div>
    </div>
  );
};

export default EditUserInfo;