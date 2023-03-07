import alertStyle from "../../sass/forms/alertForm.module.scss";

export const Alert = ({ alert }) => {
  const { error, msg } = alert;

  return (
    <div className={alertStyle.alertContainer}>
      <h2>{msg}</h2>
    </div>
  );
};
