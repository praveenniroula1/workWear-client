import React from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../Header.js/Header";
import { SideMenu } from "../side-menu/SideMenu";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <SideMenu />
      {/* MainBody */}

      <main style={{ minHeight: "70vh" }} className="container">
        {children}
      </main>

      {/* FOoter */}
      <Footer />
    </div>
  );
};
