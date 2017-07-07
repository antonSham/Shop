import React from 'react';
import { connect } from 'react-redux';
import { Item } from '../components/Item.js'
import { getItems } from '../actions/index.js'

const mapStateToProps = (state) => ({
  items: state.items,
  error: state.error
})

const mapDispatchToProps = (dispatch) => ({
  onGoodsLoad: () => { dispatch(getItems()) }
})

class ItemList extends React.Component{
  componentDidMount = () => {
    this.props.onGoodsLoad();
  }
  errorMsg = () => {
    if (this.props.error !== "")
      return ( <h1>Ooops!!! Something went wrong!!!</h1> );
    else
      return null;
  }

  render = () => (
    <div className="items">
      {this.errorMsg()}
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
