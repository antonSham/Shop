import { items } from '../reducers/items.js'
import { GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from '../actions/index.js'

describe('Get items', () => {

  it('Get items default', () => {
    expect(items(undefined, {
    })).toEqual({
      items: {
        data: [],
        loaded: false,
        loading: false,
        error: ""
      }
    })

  })

  it('Get items', () => {
    expect(items({}, {
      type: GET_ITEMS,
    })).toEqual({
      items: { loading: true }
    })
  })

  it('Get items success', () => {
    expect(items({}, {
      type: GET_ITEMS_SUCCESS,
      data: [
        {id: 1},
        {id: 2}
      ],
      loading: true
    })).toEqual({
      items: {
        data: [
          {id: 1},
          {id: 2}
        ],
        loaded: true,
        loading: false
      }
    })
  })

  it('Get items failure', () => {
    expect(items({}, {
      type: GET_ITEMS_FAILURE,
      error: "Something went wrong",
      loading: true
    })).toEqual({
      items: {
        error: "Something went wrong",
        loading: false
      }
    })
  })

})
