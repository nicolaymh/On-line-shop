import Home from "./home/Home";
import Header from "./header/Header";
import Categories from "./categories/Categories";
import EditUserInfo from "./settings/EditUserInfo";
import ManageUsers from "./settings/ManageUsers";
import ManageSubcategories from "./settings/ManageSubcategories";
import ShopingCart from "./shoppingCart/ShopingCart";
import SettingsNav from "./settings/SettingsNav";
import BurgerButton from "./header/BurgerButton";
import AddSubcategory from "./settings/AddSubcategory";
import UserPermissionInfo from "./settings/UserPermissionInfo";

const privateRoutes = {
   Home,
   Categories,
   EditUserInfo,
   ManageUsers,
   ManageSubcategories,
   ShopingCart,
   SettingsNav,
   Header,
   BurgerButton,
   AddSubcategory,
   UserPermissionInfo,
};

export default privateRoutes;
