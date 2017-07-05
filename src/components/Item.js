import React, {PropTypes, } from 'react';

export const Item = ({id, imgsrc, name, price, onCartAddClick, catalogue}) => {
  let button;
  if (catalogue !== "Cart")
    button = (
      <form
        onSubmit={ event => {
            event.preventDefault();
            onCartAddClick(id);
        }}
      >
        <button type="submit">Add to cart</button>
      </form>
    );
  return (
    <div className="item">
      <img src={imgsrc} alt={name}/>
      <div className="name">
        {name}
      </div>
      <div className="price">
        {price}
      </div>
      {button}
    </div>
  );
}

Item.PropTypes = {
  id : PropTypes.number.isRequired,
  imgsrc : PropTypes.object.isRequired,
  name : PropTypes.string.isRequired,
  price : PropTypes.number.isRequired,
  onCartAddClick : PropTypes.func.isRequired
}
