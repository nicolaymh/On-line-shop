// CSS Styles ( SASS Modules ).
import alertStyle from "../../sass/forms/alertForm.module.scss";

const Alert = ({ msg, error }) => {
   return (
      <div
         className={`animate__animated animate__tada ${alertStyle.alertContainer} ${
            error ? alertStyle.alertColor1 : alertStyle.alertColor2
         }`}
      >
         <h2>{msg}</h2>
      </div>
   );
};

export default Alert;
