import React from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/index.js'
import { CartItem } from './CartItem.js'
import { Load } from './Load.js'

const mapStateToProps = (state) => ({
  items: state.cart_items,
  loaded: state.loaded,
  error: state.error
})

const mapDispatchToProps = (dispatch) => ({
  onGoodsLoad: () => { dispatch(getItems()) }
})

class ItemList extends React.Component{
  componentDidMount = () => {
    this.props.onGoodsLoad();
  }

  errorMsg = () => (
    this.props.error === "" ? null :
    ( <h1>Ooops!!! Something went wrong!!!</h1> )
  )

  load = () => (
    this.props.loaded || this.props.error !== "" ? null :
    (<Load />)
  )

  render = () => (
    <div className="items">
      {this.errorMsg()}
      {this.load()}
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
