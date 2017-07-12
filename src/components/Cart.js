import React from "react";
import Head from "./Head.js";
import Footer from "./Footer.js";
import CartGoods from "./CartGoods.js";

export default () =>
  <div>
    <Head />
    <h1>Your Cart:</h1>
    <CartGoods />
    <Footer />
  </div>;
