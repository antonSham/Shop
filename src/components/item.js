import React, {PropTypes, } from 'react';

export const Item = ({imgsrc, name, price}) => (
  <div className="item">
    <mapStateToProps />
    <img src={imgsrc} alt={name}/>
    <div className="name">
      {name}
    </div>
    <div className="price">
      {price}
    </div>
  </div>
)

Item.PropTypes = {
  imgsrc : PropTypes.object.isRequired,
  name : PropTypes.string.isRequired,
  price : PropTypes.number.isRequired
}
