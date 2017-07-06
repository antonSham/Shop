import React from 'react';
import { connect } from 'react-redux';
import { Item } from '../components/Item.js'
import { getItems } from '../actions/index.js'

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
  render = () => (
    <div className="items">
      {this.props.items.map(item =>
        <Item
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
