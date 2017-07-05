import React from 'react';
import { Head } from './Head.js'
import { Footer } from './Footer.js'
import { Goods } from './Goods.js'

export const Cart = () => (
  <div className="shop">
    <Head />
    <h1>Your Cart:</h1>
    <Goods catalogue="Cart" />
    <Footer />
  </div>
);
