import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/index.js'
import { Product } from './Product.js'
import { ItemImage } from './ItemImage.js'
import { ItemDescription } from './ItemDescription.js'
import { ItemName } from './ItemName.js'
import { ItemPrice } from './ItemPrice.js'
import { ItemButton } from './ItemButton.js'

const mapStateToProps = (state, ownProps) => ({
  item: state.items.data.filter((item) => item.id === ownProps.id)[0]
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  onButtonClick: () => dispatch(addToCart(ownProps.id))
})
const PItem = ({item, onButtonClick}) => {
  return (
    <Product>
      <ItemImage src={require("../../" + item.imgsrc)} alt={item.name} />
      <ItemDescription>
        <ItemName> {item.name} </ItemName>
        <ItemPrice> {item.price} $ </ItemPrice>
        <ItemButton onClick={onButtonClick} > To cart </ItemButton>
      </ItemDescription>
    </Product>
  );
}

export const Item = connect(
  mapStateToProps,
  mapDispatchToProps
)(PItem);
