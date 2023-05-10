import style from "../../sass/modal/modal.module.scss";

export const Modal = ({ setShowModal }) => {
   return (
      <div className={style.containerModal}>
         <h3>Your session has expired, please log in again.</h3>

         <button onClick={() => setShowModal(false)}>OK</button>
      </div>
   );
};
