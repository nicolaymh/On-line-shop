import style from "../../sass/screenLoader/loader.module.scss";

import logoImage from "../../assets/logo-final.png";

const Loader = () => {
  return (
    <div className={`${style.logerContainer}`}>
      <div className={style.imageContainer}>
        <img src={logoImage} alt="logo-image" />
      </div>

      <div className={style.noticeContainer}>
        <h1>Loading</h1>
      </div>
    </div>
  );
};

export default Loader;
