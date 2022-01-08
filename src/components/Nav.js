import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/images/logo.png";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/signup");
  };
  return (
    <div>
      <p className="app-logo">React JS</p>
      {auth ? (
        <ul className="nav-bar">
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/products/add">Add Product</Link></li>
          <li><Link to="/update">Update Products</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link onClick={logout} to="/signup" className="menu-li-signup">Log Out 
          <i className="app-user-info">{JSON.parse(auth).full_name}</i>
          </Link> </li>
        </ul>
      ) : (
        <ul className="nav-bar text-right">
          <li><Link to="/signup" className="menu-li-signup"> Sign Up</Link></li>
          <li><Link to="/login" className="menu-li-login">Login</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
