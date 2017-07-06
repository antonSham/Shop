import React from 'react';
import { Link } from 'react-router-dom'
import { Title } from './Title.js'
import { StyledHead } from './StyledHead.js'

export const Head = () => (
  <StyledHead>
    <Link to="/">
      <img src={require("../../data/img/logo.jpg")} alt="logo" />
    </Link>
    <Title>The best toe shop</Title>
    <Link to="/Cart">
      <img src={require("../../data/img/cart.jpg")} alt="cart" />
    </Link>
  </StyledHead>
);
