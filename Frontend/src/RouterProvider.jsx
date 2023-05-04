// React-router-Dom
import { Routes, Route, Navigate } from "react-router-dom";

// Public Route => Auth
import AuthLayout from "./layouts/AuthLayout";

// Public Routes
import LoginForm from "./components/public-components/LoginForm";
import RegisterForm from "./components/public-components/RegisterForm";
import ForgotPassword from "./components/public-components/ForgotPassword";
import NewPassword from "./components/public-components/NewPassword";
import ConfirmAccount from "./components/public-components/ConfirmAccount";

// Private Route => Shop
import Shop from "./layouts/Shop";

// Private Routes
import Home from "./components/private-components/home/Home";
import Products from "./components/private-components/categories/Categories";
import ShopingCart from "./components/private-components/shoppingCart/ShopingCart";
import Settings from "./layouts/Settings";

// Context
import useAuth from "./Hooks/useAuth";

const RouterProvider = () => {
  const { auth } = useAuth();

  return (
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

        <Route path="settings" element={<Settings />}>
          <Route index element={<div>My shopping</div>} />
          <Route path="edit-info" element={<div>Edit Info</div>} />
          <Route path="add-products" element={<div>Add Products</div>} />
          {auth.role === "admin" && (
            <>
              <Route path="manage-users" element={<div>Manage users</div>} />
              <Route path="manage-subcategories" element={<div>Manage Subcategories</div>} />
            </>
          )}
        </Route>

        <Route path="shoping-cart" element={<ShopingCart />} />
      </Route>
    </Routes>
  );
};

export default RouterProvider;
