import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import { todoApp } from './reducers/index.js'
import { Shop } from './components/Shop.js'
import { Cart } from './components/Cart.js'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

export let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Shop} />
        <Route path="/cart" component={Cart} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
