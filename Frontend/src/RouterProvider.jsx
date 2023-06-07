// React-router-Dom
import { Routes, Route, Navigate } from "react-router-dom";

import { Modal } from "./components/general-components/Modal";

// Context
import useAuth from "./Hooks/useAuth";
import useCategory from "./Hooks/useCategory";

// Public Route => Auth
import AuthLayout from "./layouts/AuthLayout";

// Public Routes
import publicRoutes from "./components/public-components/";

// Private Route => Shop
import Shop from "./layouts/Shop";

// Private Routes
import Home from "./components/private-components/home/Home";
import Products from "./components/private-components/categories/Categories";
import ShopingCart from "./components/private-components/shoppingCart/ShopingCart";
import Settings from "./layouts/Settings";

// Settings Routes ==> Private Routes
import EditUserInfo from "./components/private-components/settings/EditUserInfo";
import ManageSubcategories from "./components/private-components/settings/ManageSubcategories";
import ManageUsers from "./components/private-components/settings/ManageUsers";

const RouterProvider = () => {
   const { auth, showModal, setShowModal } = useAuth();
   const { setCategoryinfoAll } = useCategory();

   return (
      <>
         {showModal.ok ? (
            <Modal
               showModal={showModal}
               setShowModal={setShowModal}
               setCategoryinfoAll={setCategoryinfoAll}
            />
         ) : (
            <Routes>
               <Route path="/" element={<AuthLayout />}>
                  <Route index element={<publicRoutes.LoginForm />} />
                  <Route path="register" element={<publicRoutes.RegisterForm />} />
                  <Route path="confirm/:id" element={<publicRoutes.ConfirmAccount />} />
                  <Route path="forgot-password" element={<publicRoutes.ForgotPassword />} />
                  <Route path="forgot-password/:token" element={<publicRoutes.NewPassword />} />
                  <Route path="*" element={<Navigate to="/" />} replace />
               </Route>

               <Route path="shop" element={<Shop />}>
                  <Route index element={<Home />} />
                  <Route path="categories" element={<Products />} />
                  <Route path="settings" element={<Settings />}>
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
