import React from "react";
import Footer from "./Footer";
import Home from "./Home";
function Layout() {
  return (
    <>
      <div className="w-full h-full">
        <Home />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
