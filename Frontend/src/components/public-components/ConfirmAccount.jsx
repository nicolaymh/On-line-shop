import { useEffect, useState } from "react";
import axiosInstance from "../../helpers/axiosInstance";

// Components
import { Alert } from "../general-components/Alert";

// Assets
import logo from "../../assets/logo-final.png";
import confirmAccountImage from "../../assets/images/confirmAccount-image.png";
import { useParams } from "react-router-dom";

// CSS style ( SASS Modules )
import logoStyle from "../../sass/logo/logoStyle.module.scss";
import style from "../../sass/confirmAccount.module.scss";
import alertStyle from "../../sass/forms/alertForm.module.scss";

const ConfirmAccount = () => {
  const [alert, setAlert] = useState({ msg: "", error: false });

  const { id: token } = useParams();

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const response = await axiosInstance.put(`/users/confirm/${token}`);
        const notice = response.data.msg;
        setAlert({ msg: notice, error: false });
      } catch (error) {
        const notice = error.response.data.msg;
        setAlert({ msg: notice, error: true });
      }
    };

    confirmAccount();
  }, []);

  return (
    <div className={style.confirmAccountContainer}>
      <div className={style.containerImage}>
        <img src={confirmAccountImage} alt="confirmAccount-image" />
      </div>

      <div className={logoStyle.logoTitle2}>
        <div className={logoStyle.logo}>
          <img src={logo} alt="logo" />
        </div>

        <h1 className={style.h1}>
          GAMER <span>STORE</span>
        </h1>
      </div>

      {alert.msg && <Alert {...alert} />}
    </div>
  );
};

export default ConfirmAccount;
