import { createContext } from "react";

// Context
const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
   return (
      <CategoryContext.Provider value="hola desde CategoryContext">
         {children}
      </CategoryContext.Provider>
   );
};

export { CategoryProvider };

export default CategoryContext;
