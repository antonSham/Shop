import { GET_ITEMS } from '../actions/index.js'
import { initialState } from '../reducers/index.js'

export const itemsApp = (state = initialState, action) => {
  const catalog = [
    {imgsrc: require("../../data/img/1.jpg"), name: "bick", price: 250},
    {imgsrc: require("../../data/img/2.jpg"), name: "rocket", price: 200},
    {imgsrc: require("../../data/img/3.jpg"), name: "pokemon", price: 300}
  ]
  switch (action.type) {
    case GET_ITEMS:
      if (state.Loaded)
        return state;
      else
        return Object.assign( {}, state, {
          items : catalog,
          Loaded : true
        });
    default:
      return state;
  }
}
