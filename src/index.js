import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import { getItems } from './actions/index.js'
import { VisibleItemList } from './components/itemList.js'
import { todoApp } from './reducers/index.js'
/*import { connect } from 'react-redux';*/

let store = createStore(todoApp);

store.dispatch(getItems());

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
