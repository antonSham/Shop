import React from 'react';
import { getItems } from '../actions/index.js'
import { VisibleItemList } from '../components/ItemList.js'
import { store } from '../index.js'

export const Body = () => {
  store.dispatch(getItems());
  return (
    <div className="body">
      <VisibleItemList />
    </div>
  )
}
