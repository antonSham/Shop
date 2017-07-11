import React from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/index.js'
import { CartItem } from './CartItem.js'
import { Load } from './Load.js'

const mapStateToProps = (state) => ({
  items: state.cart,
  loading: state.items.loading,
  error: state.items.error
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
    this.props.loading && this.props.error === "" ? (<Load />) : null
  )

  render = () => (
    <div className="items">
      {this.errorMsg()}
      {this.load()}
      {this.props.items.map(item =>
        <CartItem
          key={item.id}
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
