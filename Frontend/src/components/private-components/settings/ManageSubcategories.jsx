import useCategory from "../../../Hooks/useCategory";

const ManageSubcategories = () => {
   const { categoryinfoAll } = useCategory();

   console.log(categoryinfoAll);

   return <div>ManageSubcategories</div>;
};

export default ManageSubcategories;
