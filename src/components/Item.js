import React, {PropTypes, } from 'react';
import { addToCart } from '../actions/index.js';
import { store } from '../index.js';

export const Item = ({id, imgsrc, name, price, onCartAddClick}) => (
  <div className="item">
    <img src={imgsrc} alt={name}/>
    <div className="name">
      {name}
    </div>
    <div className="price">
      {price}
    </div>
    <form
      onSubmit={ event => {
          event.preventDefault();
          onCartAddClick(id);
      }}
    >
      <button type="submit">Add to cart</button>
    </form>
  </div>
)

Item.PropTypes = {
  id : PropTypes.number.isRequired,
  imgsrc : PropTypes.object.isRequired,
  name : PropTypes.string.isRequired,
  price : PropTypes.number.isRequired,
  onCartAddClick : PropTypes.func.isRequired
}
