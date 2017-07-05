import React, {PropTypes, } from 'react';
import { connect } from 'react-redux';
import { Item } from '../components/Item.js'

const mapStateToProps = (state) => {
  return {
    items: state.items,
  }
}

export const ItemList = ({items, }) => (
  <div className="items">
    {items.map(item =>
      <Item
        id={item.id}
        imgsrc={item.imgsrc}
        name={item.name}
        price={item.price}
      />
    )}
  </div>
)

ItemList.PropTypes = {
  items : PropTypes.arrayOf(PropTypes.shape({
    id : PropTypes.number.isRequired,
    imgsrc: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired).isRequired,
}

export const VisibleItemList = connect( mapStateToProps )(ItemList);
