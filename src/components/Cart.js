import React from "react";
import CartGoods from "./CartGoods.js";
import Layout from "./Layout.js";


export default () =>
  <Layout>
    <h1>Your Cart:</h1>
    <CartGoods />
  </Layout>;
