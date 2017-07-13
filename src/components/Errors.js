import React from "react";
import { connect } from "react-redux";

import Error from "./Error.js";

const mapStateToProps = (state, ownProps) => ({
  errorList: state.errors
});

const Errors = ({ errorList }) =>
  <div>
    {errorList.map((error, id) => <Error key={id} id={id} />)}
  </div>;

export default connect(mapStateToProps)(Errors);
