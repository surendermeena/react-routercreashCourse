import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const Header = () => {

  
  return (
    <div>
      <Link to="/">#VanLife</Link>
      <nav className="text-center space-x-4 ">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "my-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="host"
          className={({ isActive }) => (isActive ? "my-link" : "")}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "my-link" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? "my-link" : "")}
        >
          Vans
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
