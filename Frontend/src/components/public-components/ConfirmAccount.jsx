import { useEffect, useState } from "react";
import axios from "axios";

// Assets
import logo from "../../assets/logo-final.png";
import confirmAccountImage from "../../assets/images/confirmAccount-image.png";
import { useParams } from "react-router-dom";

// CSS style ( SASS Modules )
import logoStyle from "../../sass/logo/logoStyle.module.scss";
import style from "../../sass/confirmAccount.module.scss";
import axiosInstance from "../../helpers/axiosInstance";

const ConfirmAccount = () => {
  const [alert, setAlert] = useState({ msg: "" });

  const { id: token } = useParams();

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const response = await axiosInstance.put(`/users/confirm/${token}`);
        const notice = response.data.msg;
        setAlert({ msg: notice });
      } catch (error) {
        const notice = error.response.data.msg;
        setAlert({ msg: notice });
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

        <div>
          <h2 className={style.h2}>{alert.msg}</h2>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAccount;
