import React from 'react';
import { Link } from 'react-router-dom'

export const Head = () => (
  <div className="head">
    <Link to="/">
      <img src={require("../../data/img/logo.jpg")} alt="logo" />
    </Link>
    <h1 className="title">The best toe shop</h1>
    <Link to="/Cart">
      <img src={require("../../data/img/cart.jpg")} alt="cart" />
    </Link>
  </div>
);
