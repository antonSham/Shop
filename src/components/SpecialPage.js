import React from "react";
import { Redirect } from "react-router-dom";

export default () =>
  <div>
    <Redirect to={'/' + location.search} />
  </div>;
