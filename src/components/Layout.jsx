import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import { StateContext } from "../context/StateContext";

const Layout = () => {
  return (
    <StateContext>
      <div className="layout">
        <Sidebar />
        <div className="inner-layout">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </StateContext>
  );
};

export default Layout;
