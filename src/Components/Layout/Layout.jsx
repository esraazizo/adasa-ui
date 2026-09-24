import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Navbar />
      <main className=" mt-20 min-h-screen bg-[#0A0A0A] text-white">
        <div className="container">
          <section>
            <Outlet />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
