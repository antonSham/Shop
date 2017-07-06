import React from 'react';
import { connect } from 'react-redux';
import { popFromCart } from '../actions/index.js';
import { Product } from './Product.js'
import { ItemImage } from './ItemImage.js'
import { ItemDescription } from './ItemDescription.js'
import { ItemName } from './ItemName.js'
import { ItemPrice } from './ItemPrice.js'
import { ItemButton } from './ItemButton.js'

const mapStateToProps = (state, ownProps) => ({
  item: state.items.filter((item) => item.id === ownProps.id)[0],
  quantity: state.cart_items.filter((item) => item.id === ownProps.id)[0].quantity
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  onButtonClick:() =>  dispatch(popFromCart(ownProps.id))
})
const PItem = ({item, quantity, onButtonClick}) => {
  return (
    <Product>
      <ItemImage src={item.imgsrc} alt={item.name} />
      <ItemDescription>
        <ItemName> {item.name} </ItemName>
        <ItemPrice> {item.price} $ </ItemPrice>
        <ItemButton onClick={onButtonClick} > Pop </ItemButton>
      </ItemDescription>
    </Product>
  );
}

export const CartItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(PItem);
