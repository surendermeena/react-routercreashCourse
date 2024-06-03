import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#7ca7b6",
  };
  return (
    <div>
      This is Host Layout
      <nav className="border flex  py-2 mx-auto ">
        <NavLink
          to="/host"
          end
          className="rounded-lg p-2 "
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {" "}
          Dashboard{" "}
        </NavLink>

        <NavLink
          to="income"
          className="rounded-lg p-2 "
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {" "}
          Income{" "}
        </NavLink>

        <NavLink
          to="reviews"
          className="rounded-lg p-2 "
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {" "}
          Reviews{" "}
        </NavLink>
        <NavLink
          to="vans"
          className="rounded-lg p-2 "
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          {" "}
          Vans{" "}
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
