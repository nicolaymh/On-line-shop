// Auth
import AuthLayout from "./layouts/AuthLayout";

// Private Route
import Shop from "./layouts/Shop";

// Public Routes
import LoginForm from "./components/public-components/LoginForm";
import RegisterForm from "./components/public-components/RegisterForm";
import ForgotPassword from "./components/public-components/ForgotPassword";
import NewPassword from "./components/public-components/NewPassword";
import ConfirmAccount from "./components/public-components/ConfirmAccount";

// Private Routes
import Home from "./components/private-components/Home";
import Products from "./components/private-components/Categories";

// Context
import { AuthProvider } from "./context/AuthProvider";

// React-router-Dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Settings from "./components/private-components/Settings";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
            <Route path="confirm/:id" element={<ConfirmAccount />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="forgot-password/:token" element={<NewPassword />} />
            <Route path="*" element={<Navigate to="/" />} replace />
          </Route>

          <Route path="shop" element={<Shop />}>
            <Route index element={<Home />} />
            <Route path="categories" element={<Products />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
