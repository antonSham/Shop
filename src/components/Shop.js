import React from 'react';
import { Head } from './Head.js'
import { Footer } from './Footer.js'
import { Goods } from './Goods.js'

export const Shop = () => (
  <div className="shop">
    <Head />
    <Goods />
    <Footer />
  </div>
);
