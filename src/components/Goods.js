import React from 'react';
import { connect } from 'react-redux';
import { Item } from '../components/Item.js'
import { getItems } from '../actions/index.js'
import { Load } from './Load.js'

const mapStateToProps = (state) => ({
  items: state.items,
})

const mapDispatchToProps = (dispatch) => ({
  onGoodsLoad: () => { dispatch(getItems()) }
})

class ItemList extends React.Component{
  componentDidMount = () => {
    this.props.onGoodsLoad();
  }
  errorMsg = () => (
    this.props.items.error === "" ? null :
    ( <h1>Ooops!!! Something went wrong!!!</h1> )
  )

  load = () => (
    this.props.items.loading && this.props.items.error === "" ? (<Load />) : null
  )

  render = () => (
    <div className="items">
      {this.errorMsg()}
      {this.load()}
      {this.props.items.data.map(item =>
        <Item
          key={item.id}
          id={item.id}
        />
      )}
    </div>
  )
}

export const Goods = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
