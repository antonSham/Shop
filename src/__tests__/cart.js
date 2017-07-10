import { cartApp } from '../reducers/cart.js'
import { ADD_TO_CART, POP_FROM_CART } from '../actions/index.js'

describe('Adding to cart', () => {
  it('Add to empty cart', () => {
    expect(cartApp({
      items: [
        {"id": 1, "imgsrc": "data/img/1.jpg", "name": "Bick",     "price": 250, "catalogue": "Main"},
        {"id": 2, "imgsrc": "data/img/2.jpg", "name": "Rocket",   "price": 200, "catalogue": "Main"}
      ],
      cart_items: []
    }, {
      type: ADD_TO_CART,
      id: 1
    })).toEqual({
      items: [
        {"id": 1, "imgsrc": "data/img/1.jpg", "name": "Bick",     "price": 250, "catalogue": "Main"},
        {"id": 2, "imgsrc": "data/img/2.jpg", "name": "Rocket",   "price": 200, "catalogue": "Main"}
      ],
      cart_items: [
        {id: 1, quantity: 1}
      ]
    })
  })

  it('Add to not empty cart', () => {
    expect(cartApp({
      items: [
        {"id": 1, "imgsrc": "data/img/1.jpg", "name": "Bick",     "price": 250, "catalogue": "Main"},
        {"id": 2, "imgsrc": "data/img/2.jpg", "name": "Rocket",   "price": 200, "catalogue": "Main"}
      ],
      cart_items: [
        {id: 1, quantity: 5}
      ]
    }, {
      type: ADD_TO_CART,
      id: 2
    })).toEqual({
      items: [
        {"id": 1, "imgsrc": "data/img/1.jpg", "name": "Bick",     "price": 250, "catalogue": "Main"},
        {"id": 2, "imgsrc": "data/img/2.jpg", "name": "Rocket",   "price": 200, "catalogue": "Main"}
      ],
      cart_items: [
        {id: 1, quantity: 5},
        {id: 2, quantity: 1}
      ]
    })
  })

  it('Add presence item', () => {
    expect(cartApp({
      items: [
        {"id": 1, "imgsrc": "data/img/1.jpg", "name": "Bick",     "price": 250, "catalogue": "Main"},
        {"id": 2, "imgsrc": "data/img/2.jpg", "name": "Rocket",   "price": 200, "catalogue": "Main"}
      ],
      cart_items: [
        {id: 1, quantity: 5}
      ]
    }, {
      type: ADD_TO_CART,
      id: 1
    })).toEqual({
      items: [
        {"id": 1, "imgsrc": "data/img/1.jpg", "name": "Bick",     "price": 250, "catalogue": "Main"},
        {"id": 2, "imgsrc": "data/img/2.jpg", "name": "Rocket",   "price": 200, "catalogue": "Main"}
      ],
      cart_items: [
        {id: 1, quantity: 5}
      ]
    })
  })

  it('Add wrong id item', () => {
    expect(cartApp({
      items: [
        {"id": 1, "imgsrc": "data/img/1.jpg", "name": "Bick",     "price": 250, "catalogue": "Main"},
        {"id": 2, "imgsrc": "data/img/2.jpg", "name": "Rocket",   "price": 200, "catalogue": "Main"}
      ],
      cart_items: [
        {id: 1, quantity: 5}
      ]
    }, {
      type: ADD_TO_CART,
      id: 3
    })).toEqual({
      items: [
        {"id": 1, "imgsrc": "data/img/1.jpg", "name": "Bick",     "price": 250, "catalogue": "Main"},
        {"id": 2, "imgsrc": "data/img/2.jpg", "name": "Rocket",   "price": 200, "catalogue": "Main"}
      ],
      cart_items: [
        {id: 1, quantity: 5}
      ]
    })
  })
})

describe('Poping from cart', () => {
  it('Pop from 1 item cart', () => {
    expect(cartApp({
      cart_items: [
        {id: 1, quantity: 5}
      ]
    }, {
      type: POP_FROM_CART,
      id: 1
    })).toEqual({
      cart_items: []
    })
  })

  it('Pop from many items cart', () => {
    expect(cartApp({
      cart_items: [
        {id: 1, quantity: 5},
        {id: 2, quantity: 3}
      ]
    }, {
      type: POP_FROM_CART,
      id: 2
    })).toEqual({
      cart_items: [
        {id: 1, quantity: 5}
      ]
    })
  })

  it('Pop absence item', () => {
    expect(cartApp({
      cart_items: [
        {id: 1, quantity: 5},
        {id: 2, quantity: 3}
      ]
    }, {
      type: POP_FROM_CART,
      id: 5
    })).toEqual({
      cart_items: [
        {id: 1, quantity: 5},
        {id: 2, quantity: 3}
      ]
    })
  })

  it('Pop from empty cart', () => {
    expect(cartApp({
      cart_items: []
    }, {
      type: POP_FROM_CART,
      id: 2
    })).toEqual({
      cart_items: []
    })
  })
})
