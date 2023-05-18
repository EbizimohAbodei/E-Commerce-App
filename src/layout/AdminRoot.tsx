import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Siderbar from "../components/Siderbar";
import Dashboard from "../components/Dashboard";
const AdminRoot = () => {
  return (
    <>
      <div className="container">
        <Siderbar />
        <div className="dashboard">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminRoot;
