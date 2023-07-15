// React-router-Dom
import { BrowserRouter } from "react-router-dom";

// Routes Component.
import RouterProvider from "./RouterProvider";

// Context
import { AuthProvider } from "./context/AuthProvider";
import { CategoryProvider } from "./context/CategoryProvider";
import { ProductsProvider } from "./context/ProductsProvider";

function App() {
   return (
      <BrowserRouter>
         <AuthProvider>
            <CategoryProvider>
               <ProductsProvider>
                  <RouterProvider />
               </ProductsProvider>
            </CategoryProvider>
         </AuthProvider>
      </BrowserRouter>
   );
}

export default App;
