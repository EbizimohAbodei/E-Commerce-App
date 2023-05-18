import React from "react";
import { NavLink } from "react-router-dom";

const Siderbar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/Admin">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/admin/create-product">Create Products</NavLink>
        </li>
        <li>
          <NavLink to="/admin/manage-products">Manage Products</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Siderbar;
