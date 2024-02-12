import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar.component";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

const Dashboard = () => {
  const navigate = useNavigate();
  const { isUserAuthenticated } = useSelector((store: RootState) => store.auth);

  useEffect(() => {
    if (!isUserAuthenticated) {
      navigate("/");
    }
  });

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
