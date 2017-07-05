import React, {PropTypes, } from 'react';
import { connect } from 'react-redux';
import { Item } from '../components/Item.js'
import { getItems, addToCart } from '../actions/index.js'

const mapStateToProps = (state) => ({
  items: state.items,
})

const mapDispatchToProps = (dispatch) => ({
  onGoodsLoad: () => { dispatch(getItems()) },
  onCartAddClick: (id) => { dispatch(addToCart(id)) }
})

export class ItemList extends React.Component{
  componentDidMount() {
    this.props.onGoodsLoad();
  }
  render = () => (
    <div className="items">
      {this.props.items.map(item =>
        <Item
          id={item.id}
          imgsrc={item.imgsrc}
          name={item.name}
          price={item.price}
          onCartAddClick={this.props.onCartAddClick}
        />
      )}
    </div>
  );
}

ItemList.PropTypes = {
  items : PropTypes.arrayOf(PropTypes.shape({
    id : PropTypes.number.isRequired,
    imgsrc: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired).isRequired,
}

export const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
