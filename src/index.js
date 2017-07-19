import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./reducers/index.js";
import Shop from "./components/Shop.js";
import Cart from "./components/Cart.js";
import Search from "./components/Search.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index.js";

const sagaMiddleware = createSagaMiddleware();
export let store = createStore(
  Reducer,
  applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Shop} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/search" component={Search} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
