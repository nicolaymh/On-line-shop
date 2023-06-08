// React-router-Dom.
import { Routes, Route, Navigate } from "react-router-dom";

// Context.
import useAuth from "./Hooks/useAuth";
import useCategory from "./Hooks/useCategory";

// Generic Components.
import GenericComponents from "./components/generic-components/index";

// Layouts.
import AuthLayout from "./layouts/AuthLayout";
import ShopLayout from "./layouts/ShopLayout";
import SettingsLayout from "./layouts/SettingsLayout";

// Public Routes.
import LoginForm from "./components/public-components/LoginForm";
import RegisterForm from "./components/public-components/RegisterForm";
import ConfirmAccount from "./components/public-components/ConfirmAccount";
import ForgotPassword from "./components/public-components/ForgotPassword";
import NewPassword from "./components/public-components/NewPassword";

// Private Routes.
import Home from "./components/private-components/home/Home";
import Categories from "./components/private-components/categories/Categories";
import EditUserInfo from "./components/private-components/settings/EditUserInfo";
import ManageUsers from "./components/private-components/settings/ManageUsers";
import ManageSubcategories from "./components/private-components/settings/ManageSubcategories";
import ShopingCart from "./components/private-components/shoppingCart/ShopingCart";

const RouterProvider = () => {
   const { auth, showModal, setShowModal } = useAuth();
   const { setCategoryinfoAll } = useCategory();

   return (
      <>
         {showModal.ok ? (
            <GenericComponents.Modal
               showModal={showModal}
               setShowModal={setShowModal}
               setCategoryinfoAll={setCategoryinfoAll}
            />
         ) : (
            <Routes>
               <Route path="/" element={<AuthLayout />}>
                  <Route index element={<LoginForm />} />
                  <Route path="register" element={<RegisterForm />} />
                  <Route path="confirm/:id" element={<ConfirmAccount />} />
                  <Route path="forgot-password" element={<ForgotPassword />} />
                  <Route path="forgot-password/:token" element={<NewPassword />} />
                  <Route path="*" element={<Navigate to="/" />} replace />
               </Route>

               <Route path="shop" element={<ShopLayout />}>
                  <Route index element={<Home />} />
                  <Route path="categories" element={<Categories />} />
                  <Route path="settings" element={<SettingsLayout />}>
                     <Route index element={<div>My shopping</div>} />

                     {auth.role !== "admin" && (
                        <Route path="edit-info" element={<EditUserInfo />} />
                     )}

                     {auth.role !== "user" && (
                        <Route path="add-products" element={<div>Add Products</div>} />
                     )}

                     {auth.role === "admin" && (
                        <>
                           <Route path="manage-users" element={<ManageUsers />} />
                           <Route path="manage-subcategories" element={<ManageSubcategories />} />
                        </>
                     )}
                  </Route>
                  <Route path="shoping-cart" element={<ShopingCart />} />
               </Route>
            </Routes>
         )}
      </>
   );
};

export default RouterProvider;
