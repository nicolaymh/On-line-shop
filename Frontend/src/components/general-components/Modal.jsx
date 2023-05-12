import style from "../../sass/modal/modal.module.scss";

export const Modal = ({ showModal, setShowModal }) => {
   const { msg } = showModal;

   return (
      <div className={style.containerModal}>
         <h3>{`${msg}, please log in again`}</h3>

         <button onClick={() => setShowModal({ ...showModal, ok: false })}>OK</button>
      </div>
   );
};
