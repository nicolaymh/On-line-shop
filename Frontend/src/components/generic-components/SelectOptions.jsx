// CSS Styles ( SASS Modules ).
import style from "../../sass/forms/select.module.scss";

const SelectOptions = ({ handleSelected, arrayOptions, infoTitle, defaultSelection = "-1" }) => {
   return (
      <select className={style.select} defaultValue={defaultSelection} onChange={handleSelected}>
         {infoTitle && (
            <option className={style.options} value="-1">
               {infoTitle.toUpperCase()}
            </option>
         )}

         {arrayOptions.map(({ _id, name }) => (
            <option key={_id} value={_id} className={style.options}>
               {name.toUpperCase()}
            </option>
         ))}
      </select>
   );
};

export default SelectOptions;
