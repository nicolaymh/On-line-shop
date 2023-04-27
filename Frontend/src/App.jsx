// React-router-Dom
import { BrowserRouter } from "react-router-dom";

// Routes
import RouterProvider from "./RouterProvider";

// Context
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RouterProvider />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
