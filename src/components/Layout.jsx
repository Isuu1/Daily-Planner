import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
