import { useEffect, useState } from "react";

/**
 * The `useProductsFiltering` function is a custom React hook that provides filtering functionality for
 * a list of products based on search, category, and subcategory.
 */
const useProductsFiltering = (ProductsInfo = [], categoryinfoAll = []) => {
   const [currentPage, setCurrentPage] = useState(0);
   const [search, setSearch] = useState("");
   const [category, setCategory] = useState("");
   const [subcategoriesList, setsubcategoriesList] = useState([]);
   const [filteringOut, setFilteringOut] = useState([]);

   useEffect(() => {
      setFilteringOut(ProductsInfo);
      setsubcategoriesList([]);
      setCurrentPage(0);
   }, [ProductsInfo]);

   const filterProducts = () => {
      if (search.length === 0) return filteringOut.slice(currentPage, currentPage + 5);

      const filtered = filteringOut.filter((p) => p.description.includes(search.toLowerCase()));
      return filtered.slice(currentPage, currentPage + 5);
   };

   const nextPage = () => {
      if (filteringOut.filter((p) => p.description.includes(search)).length > currentPage + 5)
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
      if (target.value === "-1") {
         setFilteringOut(ProductsInfo);
         setCurrentPage(0);
         return setsubcategoriesList([]);
      }

      setsubcategoriesList(categoryinfoAll.filter((c) => c._id === target.value)[0].subcategories);
      setCategory(target.value);

      setFilteringOut(ProductsInfo.filter((p) => p.category === target.value));
      setCurrentPage(0);
   };

   const handleSelectSubcategory = ({ target }) => {
      if (target.value === "-1") {
         setFilteringOut(ProductsInfo.filter((c) => c.category === category));
         return setCurrentPage(0);
      }

      setFilteringOut(
         ProductsInfo.filter((c) => c.category === category).filter(
            (s) => s.subcategory === target.value
         )
      );
      setCurrentPage(0);
   };

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
