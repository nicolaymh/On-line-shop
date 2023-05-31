import useCategory from "../../../Hooks/useCategory";

import style from "../../../sass/settings/manageSubcategories.module.scss";

const ManageSubcategories = () => {
   const { categoryinfoAll } = useCategory();

   console.log(categoryinfoAll);

   return <section className={style.manageSubcategoriesContainer}>ManageSubcategories</section>;
};

export default ManageSubcategories;
