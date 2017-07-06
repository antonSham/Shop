import React from 'react';
import { connect } from 'react-redux';
import { increaseQuantity, reduceQuantity } from '../actions/index.js'
import { Caunter } from './Caunter.js'
import { MinusQuantity } from './MinusQuantity.js'
import { QuantityValue } from './QuantityValue.js'
import { PlusQuantity } from './PlusQuantity.js'

const mapStateToProps = (state, ownProps) => ({
  quantity: state.cart_items.filter((item) => item.id === ownProps.id)[0].quantity
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMinus: () => dispatch(reduceQuantity(ownProps.id)),
  onPlus: () => {dispatch(increaseQuantity(ownProps.id))}
})

const PQuantityCounter = ({ quantity, onPlus, onMinus }) => (
  <Caunter>
    <MinusQuantity onClick={onMinus} blocked={quantity === 1}>-</MinusQuantity>
    <QuantityValue>{quantity}</QuantityValue>
    <PlusQuantity onClick={onPlus}>+</PlusQuantity>
  </Caunter>
);

export const QuantityCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(PQuantityCounter);
