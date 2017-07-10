import { quantityApp } from '../reducers/quantity.js'
import { INCREASE_QUANTITY, REDUCE_QUANTITY } from '../actions/index.js'

describe('Increase quantity', () => {
  it('Increase quantity in one item cart', () => {
    expect(quantityApp({
      cart_items: [
        {id: 2, quantity: 4}
      ]
    }, {
      type: INCREASE_QUANTITY,
      id: 2
    })).toEqual({
      cart_items: [
        {id: 2, quantity: 5}
      ]
    })
  })

  it('Increase quantity in many items cart', () => {
    expect(quantityApp({
      cart_items: [
        {id: 1, quantity: 2},
        {id: 2, quantity: 7}
      ]
    }, {
      type: INCREASE_QUANTITY,
      id: 2
    })).toEqual({
      cart_items: [
        {id: 1, quantity: 2},
        {id: 2, quantity: 8}
      ]
    })
  })

  it('Increase quantity for wrong item', () => {
    expect(quantityApp({
      cart_items: [
        {id: 1, quantity: 2},
        {id: 2, quantity: 7}
      ]
    }, {
      type: INCREASE_QUANTITY,
      id: 5
    })).toEqual({
      cart_items: [
        {id: 1, quantity: 2},
        {id: 2, quantity: 7}
      ]
    })
  })
})

describe('Reduce quantity', () => {
  it('Reduce quantity in one item cart', () => {
    expect(quantityApp({
      cart_items: [
        {id: 2, quantity: 4}
      ]
    }, {
      type: REDUCE_QUANTITY,
      id: 2
    })).toEqual({
      cart_items: [
        {id: 2, quantity: 3}
      ]
    })
  })

  it('Reduce quantity in many items cart', () => {
    expect(quantityApp({
      cart_items: [
        {id: 1, quantity: 2},
        {id: 2, quantity: 7}
      ]
    }, {
      type: REDUCE_QUANTITY,
      id: 2
    })).toEqual({
      cart_items: [
        {id: 1, quantity: 2},
        {id: 2, quantity: 6}
      ]
    })
  })

  it('Reduce quantity for wrong item', () => {
    expect(quantityApp({
      cart_items: [
        {id: 1, quantity: 2},
        {id: 2, quantity: 7}
      ]
    }, {
      type: REDUCE_QUANTITY,
      id: 5
    })).toEqual({
      cart_items: [
        {id: 1, quantity: 2},
        {id: 2, quantity: 7}
      ]
    })
  })

  it('Reduce 1 quantity', () => {
    expect(quantityApp({
      cart_items: [
        {id: 1, quantity: 1},
        {id: 2, quantity: 7}
      ]
    }, {
      type: REDUCE_QUANTITY,
      id: 1
    })).toEqual({
      cart_items: [
        {id: 1, quantity: 1},
        {id: 2, quantity: 7}
      ]
    })
  })
})
