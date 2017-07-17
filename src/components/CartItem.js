import React from "react";
import { connect } from "react-redux";
import { popFromCart, increaseQuantity, reduceQuantity } from "../actions/index.js";
import CartProduct from "./CartProduct.js";
import CartImage from "./CartImage.js";
import CartDescription from "./CartDescription.js";
import QuantityButton from "./QuantityButton.js";
import CartButtons from "./CartButtons.js";

const mapStateToProps = (state, ownProps) => ({
  exist: state.items.data.filter(item => item.id === ownProps.id).length > 0,
  item: state.items.data.filter(item => item.id === ownProps.id)[0],
  quantity: state.cart.filter(item => item.id === ownProps.id)[0].quantity
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onPop: () => dispatch(popFromCart(ownProps.id)),
  onPlus: () => dispatch(increaseQuantity(ownProps.id)),
  onMinus: () => dispatch(reduceQuantity(ownProps.id))
});
const CartItem = ({ exist, item, cartItem, onPop, onPlus, onMinus, quantity}) => {
    if (!exist)
      return null;
    return (
      <div>
        <CartProduct className="uk-card uk-card-default uk-grid uk-grid-collapse uk-child-width-1-2@s uk-margin-medium-bottom uk-margin-small-right uk-margin-small-left">
          <CartImage shaded={quantity===0} className="uk-card-media-left \
                                                uk-cover-container">
            <img src={require("../../" + item.imgsrc)} alt={item.name}
                  className="uk-cover"/>
            <canvas width="100px" height="100px"></canvas>
          </CartImage>
          <CartDescription shaded={quantity===0} className="uk-card-body">
            <h3 className="uk-card-title">{item.name}</h3>
            <p className="uk-text-muted">{item.price} $</p>
            <div className="uk-button-group">
              <QuantityButton left
                      onClick={onMinus}
                      className="uk-button uk-button-default uk-button-small"
                      disabled={quantity===0}>
                -
              </QuantityButton>
              <button className="uk-button uk-button-default uk-button-small"
                      disabled>
                {quantity}
              </button>
              <QuantityButton right
                      onClick={onPlus}
                      className="uk-button uk-button-default uk-button-small"
                      disabled={quantity===0}>
                +
              </QuantityButton>
            </div>
          </CartDescription>
          <CartButtons hidden={quantity!==0} className="uk-flex uk-flex-middle uk-flex-center">
            <div>
              <button onClick={onPlus} className="uk-button uk-button-default">
                Cancel
              </button>
              <button onClick={onPop} className="uk-button uk-button-default uk-button-danger">
                Pop
              </button>
            </div>
          </CartButtons>
        </CartProduct>
      </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
