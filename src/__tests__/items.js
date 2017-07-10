import { itemsApp } from '../reducers/items.js'
import { GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from '../actions/index.js'

describe('Get items', () => {
  it('Get items', () => {
    expect(itemsApp({}, {
      type: GET_ITEMS,
    })).toEqual({
      loading: true
    })
  })
})

describe('Get items success', () => {
  it('Get items success', () => {
    expect(itemsApp({}, {
      type: GET_ITEMS_SUCCESS,
      data: [
        {id: 1},
        {id: 2}
      ],
      loading: true
    })).toEqual({
      items: [
        {id: 1},
        {id: 2}
      ],
      loaded: true,
      loading: false
    })
  })
})

describe('Get items failure', () => {
  it('Get items failure', () => {
    expect(itemsApp({}, {
      type: GET_ITEMS_FAILURE,
      error: "Something went wrong",
      loading: true
    })).toEqual({
      error: "Something went wrong",
      loading: false
    })
  })
})
