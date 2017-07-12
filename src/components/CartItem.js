import React from "react";
import { connect } from "react-redux";
import { popFromCart } from "../actions/index.js";
import Product from "./Product.js";
import ItemImage from "./ItemImage.js";
import ItemDescription from "./ItemDescription.js";
import ItemName from "./ItemName.js";
import ItemPrice from "./ItemPrice.js";
import ItemButton from "./ItemButton.js";
import QuantityCounter from "./QuantityCounter.js";

const mapStateToProps = (state, ownProps) => ({
  exist: state.items.data.filter(item => item.id === ownProps.id).length > 0,
  item: state.items.data.filter(item => item.id === ownProps.id)[0]
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onButtonClick: () => dispatch(popFromCart(ownProps.id))
});
const CartItem = ({ id, item, exist, onButtonClick }) => {
  if (exist)
    return (
      <Product>
        <ItemImage src={require("../../" + item.imgsrc)} alt={item.name} />
        <ItemDescription>
          <ItemName>
            {item.name}
          </ItemName>
          <ItemPrice>
            {item.price} $
          </ItemPrice>
          <QuantityCounter id={id} />
          <ItemButton onClick={onButtonClick}> Pop </ItemButton>
        </ItemDescription>
      </Product>
    );
  else return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
