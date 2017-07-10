import { cart } from '../reducers/cart.js'
import { ADD_TO_CART, POP_FROM_CART } from '../actions/index.js'

describe('Adding to cart', () => {
  it('Add to empty cart', () => {
    expect(cart({
      cart: []
    }, {
      type: ADD_TO_CART,
      id: 1
    })).toEqual({
      cart: [
        {id: 1, quantity: 1}
      ]
    })
  })

  it('Add to not empty cart', () => {
    expect(cart({
      cart: [
        {id: 1, quantity: 5}
      ]
    }, {
      type: ADD_TO_CART,
      id: 2
    })).toEqual({
      cart: [
        {id: 1, quantity: 5},
        {id: 2, quantity: 1}
      ]
    })
  })

  it('Add presence item', () => {
    expect(cart({
      cart: [
        {id: 1, quantity: 5}
      ]
    }, {
      type: ADD_TO_CART,
      id: 1
    })).toEqual({
      cart: [
        {id: 1, quantity: 5}
      ]
    })
  })
})

describe('Poping from cart', () => {
  it('Pop from 1 item cart', () => {
    expect(cart({
      cart: [
        {id: 1, quantity: 5}
      ]
    }, {
      type: POP_FROM_CART,
      id: 1
    })).toEqual({
      cart: []
    })
  })

  it('Pop from many items cart', () => {
    expect(cart({
      cart: [
        {id: 1, quantity: 5},
        {id: 2, quantity: 3}
      ]
    }, {
      type: POP_FROM_CART,
      id: 2
    })).toEqual({
      cart: [
        {id: 1, quantity: 5}
      ]
    })
  })

  it('Pop absence item', () => {
    expect(cart({
      cart: [
        {id: 1, quantity: 5},
        {id: 2, quantity: 3}
      ]
    }, {
      type: POP_FROM_CART,
      id: 5
    })).toEqual({
      cart: [
        {id: 1, quantity: 5},
        {id: 2, quantity: 3}
      ]
    })
  })

  it('Pop from empty cart', () => {
    expect(cart({
      cart: []
    }, {
      type: POP_FROM_CART,
      id: 2
    })).toEqual({
      cart: []
    })
  })
})
