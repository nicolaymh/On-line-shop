import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>Logo</div>

      <nav>
        <NavLink to="/shop/">Home</NavLink>
        <NavLink to="/shop/Categories">Categories</NavLink>
        <NavLink to="/shop/settings">Settings</NavLink>
      </nav>
    </div>
  );
};

export default Header;
