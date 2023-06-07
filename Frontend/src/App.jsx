// React-router-Dom
import { BrowserRouter } from "react-router-dom";

// Routes Component.
import RouterProvider from "./RouterProvider";

// Context
import { AuthProvider } from "./context/AuthProvider";
import { CategoryProvider } from "./context/CategoryProvider";

function App() {
   return (
      <BrowserRouter>
         <AuthProvider>
            <CategoryProvider>
               <RouterProvider />
            </CategoryProvider>
         </AuthProvider>
      </BrowserRouter>
   );
}

export default App;
