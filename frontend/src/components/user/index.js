import { AccountCircle, Dashboard, Image } from "@mui/icons-material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const User = () => {
  const sidebarOptions = [
    {
      name: "Manage Profile",
      icon: <AccountCircle />,
      link: "/user/profile",
    },
  ];
  return (
    <div>
      <Sidebar sidebarOptions={sidebarOptions} title="User Dashboard">
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default User;
