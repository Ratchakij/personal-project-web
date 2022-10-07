import "./Header.css";

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logout from "./Logout";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

function Header() {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        Healthy Food
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>

        <CustomLink to="/product">Product</CustomLink>

        <CustomLink to="/about">About</CustomLink>
        <Logout />
      </ul>
    </nav>
  );
}

export default Header;
