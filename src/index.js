import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import { todoApp } from './reducers/index.js'
import { Shop } from './components/Shop.js'
/*import { connect } from 'react-redux';*/

export let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <Shop />
  </Provider>,
  document.getElementById("root")
);
