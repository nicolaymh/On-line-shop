// Private Routes
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ForgotPassword from "./components/ForgotPassword";
import NewPassword from "./components/NewPassword";
import ConfirmAccount from "./components/ConfirmAccount";

// React-router-Dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Auth
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="forgot-password/:token" element={<NewPassword />} />
          <Route path="confirm/:id" element={<ConfirmAccount />} />
          <Route path="*" element={<Navigate to="/" />} replace />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
