import style from "../../sass/modal/modal.module.scss";

export const Modal = ({ showModal, setShowModal }) => {
   const { msg } = showModal;

   return (
      <div className={style.containerModal}>
         <h3>{`${msg}, please log in again`}</h3>

         <button onClick={() => setShowModal({ ok: false, msg: "" })}>OK</button>
      </div>
   );
};
