// React-router-Dom.
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";

// Context.
import useAuth from "./Hooks/useAuth";
import useCategory from "./Hooks/useCategory";

// Generic Components.
import GenericComponents from "./components/generic-components/index";

// Layouts.
import AuthLayout from "./layouts/AuthLayout";
import ShopLayout from "./layouts/ShopLayout";
import SettingsLayout from "./layouts/SettingsLayout";
import ManageProductsLayout from "./layouts/ManageProductsLayout";

// Public Routes.
import LoginForm from "./components/public-components/LoginForm";
import RegisterForm from "./components/public-components/RegisterForm";
import ConfirmAccount from "./components/public-components/ConfirmAccount";
import ForgotPassword from "./components/public-components/ForgotPassword";
import NewPassword from "./components/public-components/NewPassword";

// Private Routes.
import Home from "./components/private-components/home/Home";
import EditUserInfo from "./components/private-components/settings/EditUserInfo";
import ManageUsers from "./components/private-components/settings/ManageUsers";
import ManageSubcategories from "./components/private-components/settings/ManageSubcategories";
import ShoppingCart from "./components/private-components/shoppingCart/ShoppingCart";
import AddProduct from "./components/private-components/settings/AddProduct";
import ManageProduct from "./components/private-components/settings/ManageProduct";
import Products from "./components/private-components/Products/Products";

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

                  <Route path="products" element={<Products />} />

                  <Route path="settings" element={<SettingsLayout />}>
                     <Route index element={<div>My shopping</div>} />

                     {auth.role !== "admin" && (
                        <>
                           <Route path="edit-info" element={<EditUserInfo />} />
                        </>
                     )}

                     {auth.role !== "user" && (
                        <>
                           <Route path="manage-products" element={<ManageProductsLayout />}>
                              <Route index element={<AddProduct />} />
                              <Route path="manage-product" element={<ManageProduct />} />
                           </Route>
                        </>
                     )}

                     {auth.role === "admin" && (
                        <>
                           <Route path="manage-users" element={<ManageUsers />} />
                           <Route path="manage-subcategories" element={<ManageSubcategories />} />
                        </>
                     )}
                  </Route>

                  <Route path="shopping-cart" element={<ShoppingCart />} />
               </Route>
            </Routes>
         )}
      </>
   );
};

export default RouterProvider;
