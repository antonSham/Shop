import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { App } from "./reducers/index.js";
import { Shop } from "./components/Shop.js";
import { Cart } from "./components/Cart.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logger from "redux-logger";
import thunk from "redux-thunk";

export let store = createStore(App, applyMiddleware(thunk, logger));

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
