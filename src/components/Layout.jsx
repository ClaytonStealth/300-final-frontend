import React from "react";
import Navbar from "./Navbar/NavBarAI";
import { checkAuthToken } from "../lib/checkAuthToken";

import { Outlet, Navigate } from "react-router-dom";

const Layout = () => {
  let auth = checkAuthToken();
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
