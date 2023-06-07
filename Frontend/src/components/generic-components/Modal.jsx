// CSS Styles ( SASS Modules ).
import style from "../../sass/modal/modal.module.scss";

const Modal = ({ showModal, setShowModal, setCategoryinfoAll }) => {
   const { msg } = showModal;

   const handleModal = () => {
      setShowModal({ ok: false, msg: "" });
      setCategoryinfoAll({});
   };

   return (
      <div className={style.containerModal}>
         <h3>{`${msg}, please log in again`}</h3>

         <button onClick={handleModal}>OK</button>
      </div>
   );
};

export default Modal;
