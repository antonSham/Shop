import React from "react";
import Header from "./Head.js";
import Footer from "./Footer.js";

export default ({ children }) =>
  <div>
    <Header />
    {children}
    <Footer />
  </div>;
