import React from "react";
import { connect } from "react-redux";
import { increaseQuantity, reduceQuantity } from "../actions/index.js";
import Caunter from "./Caunter.js";
import QuantityButton from "./QuantityButton.js";
import QuantityValue from "./QuantityValue.js";

const mapStateToProps = (state, ownProps) => ({
  quantity: state.cart.filter(item => item.id === ownProps.id)[0].quantity
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMinus: () => dispatch(reduceQuantity(ownProps.id)),
  onPlus: () => {
    dispatch(increaseQuantity(ownProps.id));
  }
});

const QuantityCounter = ({ quantity, onPlus, onMinus }) =>
  <Caunter>
    <QuantityButton left onClick={onMinus} blocked={quantity === 1}>
      -
    </QuantityButton>
    <QuantityValue>
      {quantity}
    </QuantityValue>
    <QuantityButton right onClick={onPlus}>
      +
    </QuantityButton>
  </Caunter>;

export default connect(mapStateToProps, mapDispatchToProps)(
  QuantityCounter
);
