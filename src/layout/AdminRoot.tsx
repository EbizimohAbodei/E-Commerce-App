import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Siderbar from "../components/Siderbar";
import useAppSelector from "../hooks/useAppSelector";
import { toast } from "react-toastify";

const AdminRoot = () => {
  const { user } = useAppSelector((state) => state.userReducers);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.role !== "admin") {
      toast("invalid access");
      navigate("/");
    }
  }, [navigate, user.role]);
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
