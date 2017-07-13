import React from "react";
import { popError } from "../actions/index.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import StyledError from "./StyledError.js";

const mapStateToProps = (state, ownProps) => ({
  message: state.errors[ownProps.id].errorMessage
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onPop: () => dispatch(popError(ownProps.id))
// });

const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators({ popError }, dispatch);

const Error = ({ message, onClickD, id, popError }) => {
  return (
    <StyledError id={id} onClick={() => popError(id)}>
      Error: {message}
    </StyledError>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
