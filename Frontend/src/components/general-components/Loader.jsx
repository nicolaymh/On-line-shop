import style from "../../sass/screenLoader/loader.module.scss";

import logoImage from "../../assets/logo-final.png";

const Loader = () => {
  return (
    <div className={`${style.logerContainer}`}>
      <div className={`${style.imageContainer}`}>
        <img
          className={`animate__animated animate__rollIn animate__slow animate__infinite`}
          src={logoImage}
          alt="logo-image"
        />
      </div>

      <div
        className={`${style.noticeContainer} animate__animated animate__slow animate__zoomIn animate__infinite`}
      >
        <h1>Loading</h1>
      </div>
    </div>
  );
};

export default Loader;
