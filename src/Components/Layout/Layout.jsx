import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      {/* <div className="min-h-screen">
        <Navbar />
        <main className="mt-22.5 bg-[#0A0A0A] text-white">
          <Outlet />
        </main>
        <Footer />
      </div> */}

      <Navbar/>
      
      <main className=" mt-[80px] min-h-screen bg-[#0A0A0A] text-white">
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
