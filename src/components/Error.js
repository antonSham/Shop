import React from "react";
import { popError } from "../actions/index.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ErrorCloseButton from "./ErrorCloseButton.js";

const mapStateToProps = (state, ownProps) => ({
  message: state.errors[ownProps.id].errorMessage
});

const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators({ popError }, dispatch);

const Error = ({ message, id, popError }) => {
  return (
    <div className="uk-alert-danger uk-margin-left uk-margin-top uk-margin-right uk-border-rounded" data-uk-alert={""}>
      <ErrorCloseButton onClick={()=>popError(id)} data-uk-close={""} />
      <p>Error: {message}</p>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
