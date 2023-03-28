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
import WebSite from "./components/private-components/WebSite";

// Context
import { AuthProvider } from "./context/AuthProvider";

// React-router-Dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
            <Route index element={<WebSite />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
