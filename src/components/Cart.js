import React from "react";
import CartGoods from "./CartGoods.js";
import Layout from "./Layout.js";


export default () =>
  <Layout>
    <h3>Your Cart:</h3>
    <CartGoods />
  </Layout>;
