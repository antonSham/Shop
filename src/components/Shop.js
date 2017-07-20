import React from "react";
import Goods from "./Goods.js";
import Layout from "./Layout.js";

const getSearchRequestFromString = (str) =>
  str.slice(1).split("&")
    .map(
      el => ({
        key: el.split("=")[0],
        value: el.split("=")[1]
      })
    )
    .filter(
      el => el.key === "search"
    )
    .map(
      el => el.value
    )[0]

export default ({location}) =>
  <Layout>
    <Goods searchRequest={getSearchRequestFromString(location.search)} />
  </Layout>;
