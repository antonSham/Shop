import React, {PropTypes, } from 'react';
import { connect } from 'react-redux';
import { Item } from '../components/Item.js'
import { getItems, addToCart } from '../actions/index.js'

const mapStateToProps = (state) => ({
  items: state.items,
  cart_items: state.cart_items
})

const mapDispatchToProps = (dispatch) => ({
  onGoodsLoad: () => { dispatch(getItems()) },
  onCartAddClick: (id) => { dispatch(addToCart(id)) }
})

export class ItemList extends React.Component{
  componentDidMount() {
    this.props.onGoodsLoad();
  }
  render = () => {
    let items = [];
    if (this.props.catalogue === "Main")
      items = this.props.items;
    else if (this.props.catalogue === "Cart")
      items = this.props.cart_items;

    return (
      <div className="items">
        {items.map(item =>
          <Item
            imgsrc={item.imgsrc}
            name={item.name}
            price={item.price}
            onButtonClick={this.props.catalogue === "Main" ?
                            () => this.props.onCartAddClick(item.id) :
                            null}
            catalogue={this.props.catalogue}
          />
        )}
      </div>
    )
  }
}

ItemList.PropTypes = {
  items : PropTypes.arrayOf(PropTypes.shape({
    id : PropTypes.number.isRequired,
    imgsrc: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired).isRequired,
}

export const Goods = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
