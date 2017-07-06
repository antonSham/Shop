import { GET_ITEMS } from '../actions/index.js'

export const itemsApp = (state, action) => {
  const catalog = [
    {id: 1, imgsrc: require("../../data/img/1.jpg"), name: "Bick", price: 250},
    {id: 2, imgsrc: require("../../data/img/2.jpg"), name: "Rocket", price: 200},
    {id: 3, imgsrc: require("../../data/img/3.jpg"), name: "Pokemon", price: 300}
  ]
  switch (action.type) {
    case GET_ITEMS:
      if (state.loaded)
        return state;
      else
        return Object.assign( {}, state, {
          items : catalog,
          loaded : true
        });
    default:
      return state;
  }
}
