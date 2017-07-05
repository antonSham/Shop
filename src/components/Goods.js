import React from 'react';
import { getItems } from '../actions/index.js'
import { VisibleItemList } from '../components/ItemList.js'
import { store } from '../index.js'

export class Goods extends React.Component {
  render = () => (
    <div className="body">
      <VisibleItemList />
    </div>
  );
}
