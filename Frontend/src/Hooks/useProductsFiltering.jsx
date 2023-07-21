import { useState } from "react";

const useProductsFiltering = (ProductsInfo = [], categoryinfoAll = []) => {
   const [currentPage, setCurrentPage] = useState(0);
   const [search, setSearch] = useState("");
   const [subcategoriesList, setsubcategoriesList] = useState([]);

   const filterProducts = () => {
      if (search.length === 0) return ProductsInfo.slice(currentPage, currentPage + 5);

      const filtered = ProductsInfo.filter((p) => p.description.includes(search.toLowerCase()));
      return filtered.slice(currentPage, currentPage + 5);
   };

   const nextPage = () => {
      if (ProductsInfo.filter((p) => p.description.includes(search)).length > currentPage + 5)
         return setCurrentPage(currentPage + 5);
   };

   const prevPage = () => {
      if (currentPage > 0) setCurrentPage(currentPage - 5);
   };

   const onSearchChange = ({ target }) => {
      setCurrentPage(0);
      setSearch(target.value);
   };

   const handleSelectCategory = ({ target }) => {
      if (target.value === "-1") return setsubcategoriesList([]);

      setsubcategoriesList(categoryinfoAll.filter((c) => c._id === target.value)[0].subcategories);
   };
   const handleSelectSubcategory = () => {};

   return {
      filterProducts,
      nextPage,
      prevPage,
      onSearchChange,
      subcategoriesList,
      handleSelectCategory,
      handleSelectSubcategory,
   };
};

export default useProductsFiltering;
