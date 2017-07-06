import React from 'react';
import { connect } from 'react-redux';
import { Item } from '../components/Item.js'
import { getItems, addToCart } from '../actions/index.js'
import { CartItem } from './CartItem.js'

const mapStateToProps = (state) => ({
  items: state.cart_items
})

const mapDispatchToProps = (dispatch) => ({
  onGoodsLoad: () => { dispatch(getItems()) }
})

class ItemList extends React.Component{
  componentDidMount = () => {
    this.props.onGoodsLoad();
  }
  render = () => (
    <div className="items">
      {this.props.items.map(item =>
        <CartItem
          id={item.id}
        />
      )}
    </div>
  )
}

export const CartGoods = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
