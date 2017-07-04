import React, {PropTypes, } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
/*import { connect } from 'react-redux';*/

const GET_ITEMS = "GET_ITEMS";

const getItems = () => {
  return { type : GET_ITEMS}
}

const initialState = {
    items: []
}

const todoApp = (state = initialState, action) => {
  const catalog = [
    {imgsrc: require("../data/img/1.jpg"), name: "bick", price: 250},
    {imgsrc: require("../data/img/2.jpg"), name: "rocket", price: 200},
    {imgsrc: require("../data/img/3.jpg"), name: "pokemon", price: 300}
  ]
  switch (action.type) {
    case GET_ITEMS:
      return Object.assign( {}, state, {
        items : catalog
      });
    default:
      return state;
  }
}

let store = createStore(todoApp);

store.dispatch(getItems());

const mapStateToProps = (state) => {
  return {
    items: state.items,
  }
}

const Item = ({imgsrc, name, price}) => (
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

const ItemList = ({items, }) => (
  <div className="items">
    {items.map(item =>
      <Item
        imgsrc={item.imgsrc}
        name={item.name}
        price={item.price}
      />
    )}
  </div>
)

ItemList.PropTypes = {
  items : PropTypes.arrayOf(PropTypes.shape({
    imgsrc: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired).isRequired,
}

const VisibleItemList = connect( mapStateToProps )(ItemList);

const Head = () => (
  <div className="head">
    <a href="#">
      <img src={require("../data/img/logo.jpg")} alt="logo" />
    </a>
    <h1 className="title">The best toe shop</h1>
  </div>
);

const Body = () => (
  <div className="body">
    <VisibleItemList />
  </div>
);

const Footer = () => (
  <div className="footer">
  &copy; 2017
  </div>
);

const Shop = () => (
  <div className="shop">
    <Head />
    <Body />
    <Footer />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <Shop />
  </Provider>,
  document.getElementById("root")
);
