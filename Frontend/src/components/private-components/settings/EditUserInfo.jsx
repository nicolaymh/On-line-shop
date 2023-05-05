import { useForm } from "../../../Hooks/useForm";

import initialFormInputs from "../../../helpers/initialFormInputs";

// CSS formStyle ( SASS Modules )
import formStyle from "../../../sass/forms/generalFormStyle.module.scss";
import containerStyle from "../../../sass/forms/editUser.module.scss";

// Assets
import registerImage from "../../../assets/images/register-image.png";

// Context
import useAuth from "../../../Hooks/useAuth";

const EditUserInfo = () => {
  const { auth } = useAuth();

  const { editUser: initialForm } = initialFormInputs();

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

    console.log(e);
  };

  return (
    <div className={containerStyle.editUserContainer}>
      <form onSubmit={handleSubmit} className={formStyle.form}>
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
          <label htmlFor="confirmNewPassword">New-password: </label>

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
          <input type="submit" value="SIGN UP" />
        </div>
      </form>

      <div className={containerStyle.imgContainer}>
        <img height="100%" src={registerImage} alt="register-image" />
      </div>
    </div>
  );
};

export default EditUserInfo;
