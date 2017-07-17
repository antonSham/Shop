import React from "react";
import { popError } from "../actions/index.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  message: state.errors[ownProps.id].errorMessage
});

const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators({ popError }, dispatch);

const Error = ({ message, id, popError }) => {
  return (
    <div className="uk-alert uk-alert-danger">
      <a className="uk-alert-close uk-close" onClick={()=>popError(id)}>X</a>
      <p>Error: {message}</p>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
