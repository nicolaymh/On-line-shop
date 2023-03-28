import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Shop = () => {
  const { auth } = useAuth();

  console.log(auth);

  return <main>{auth._id ? <Outlet /> : <Navigate to="/" />}</main>;
};

export default Shop;
