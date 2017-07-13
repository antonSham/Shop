import React from "react";
import Header from "./Head.js";
import Footer from "./Footer.js";
import Errors from "./Errors.js";

export default ({ children }) =>
  <div>
    <Errors />
    <Header />
    {children}
    <Footer />
  </div>;
