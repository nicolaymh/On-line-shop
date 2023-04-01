import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../helpers/axiosInstance";

// Components
import { Alert } from "../general-components/Alert";

// Assets
import logo from "../../assets/logo-final.png";
import confirmAccountImage from "../../assets/images/confirmAccount-image.png";

// CSS style ( SASS Modules )
import logoStyle from "../../sass/logo/logoStyle.module.scss";
import style from "../../sass/confirmAccount/confirmAccount.module.scss";

const ConfirmAccount = () => {
  const [alert, setAlert] = useState({ msg: "", error: false });

  const firstMount = useRef(true);

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

    if (firstMount.current) {
      confirmAccount();
      firstMount.current = false;
    }
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

        {alert.msg && <Alert {...alert} />}

        <nav>
          <div className={style.containerNav}>
            <Link className={style.link} to="/">
              Sign in
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ConfirmAccount;
