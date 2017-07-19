import React from "react";
import SearchedGoods from "./SearchedGoods.js";
import Layout from "./Layout.js";

export default ({ searchRequest, location }) =>
  <Layout>
    <h3>Searched items:</h3>
    <SearchedGoods searchRequest={location.pathname.split('/')[2]} />
  </Layout>;
