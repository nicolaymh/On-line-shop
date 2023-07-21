import { useState } from "react";

const useProductsFiltering = (productsContext = []) => {
   const [currentPage, setCurrentPage] = useState(0);
   const [search, setSearch] = useState("");

   const filterProducts = () => {
      if (search.length === 0) return productsContext.slice(currentPage, currentPage + 5);

      const filtered = productsContext.filter((p) => p.description.includes(search.toLowerCase()));
      return filtered.slice(currentPage, currentPage + 5);
   };

   const nextPage = () => {
      if (productsContext.filter((p) => p.description.includes(search)).length > currentPage + 5)
         return setCurrentPage(currentPage + 5);
   };

   const prevPage = () => {
      if (currentPage > 0) setCurrentPage(currentPage - 5);
   };

   const onSearchChange = ({ target }) => {
      setCurrentPage(0);
      setSearch(target.value);
   };

   return {
      filterProducts,
      nextPage,
      prevPage,
      onSearchChange,
   };
};

export default useProductsFiltering;
