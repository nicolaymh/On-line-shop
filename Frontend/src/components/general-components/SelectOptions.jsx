import style from "../../sass/forms/select.module.scss";

const SelectOptions = ({ handleSelected, arrayOptions, infoTitle }) => {
   return (
      <select className={style.select} onChange={handleSelected}>
         <option value="-1">{infoTitle}</option>
         {arrayOptions.map(({ _id, name }) => (
            <option key={_id} value={_id}>
               {name.toUpperCase()}
            </option>
         ))}
      </select>
   );
};

export default SelectOptions;
