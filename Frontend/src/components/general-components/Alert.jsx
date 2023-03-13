import alertStyle from "../../sass/forms/alertForm.module.scss";

export const Alert = ({ msg, error }) => {
  return (
    <div
      className={`${alertStyle.alertContainer} ${
        error ? alertStyle.alertColor1 : alertStyle.alertColor2
      }`}
    >
      <h2>{msg}</h2>
    </div>
  );
};
