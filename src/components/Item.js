import React, {PropTypes, } from 'react';
import styled, { css } from 'styled-components';

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
  float: left;
  border-radius: 10px;
`;

const ItemName = styled.div`
  font-size: 15pt;
  text-align: right;
  font-weight: bold;
  display: table-cell;
  color: mediumblue;
`;

const ItemPrice = styled.div`
  font-size: 10pt;
  color: blue;
`;

const ItemAddButton = styled.div`
  font-size: 12pt;
  visibility: ${props => (props.onClick == null) ? 'hidden' : 'visible'};
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 5px;
  border-radius: 10px;
  background-color: gray;

  :hover {
    background-color: darkgray;
  }
  :active {
    background-color: dimgray;
  }
`;

const Product = styled.div`
  display: inline-block;
  margin: 20px;
  background-color: gainsboro;
  border-radius: 10px;
`;

const ItemDescription = styled.div`
  width : 100px;
  height : 100px;
  float: right;
  padding 10px;
  position: relative;
  border-left: solid 1px dimgray;
  background-color: lightgrey;
  border-radius: 0 10px 10px 0;
`;

export const Item = ({imgsrc, name, price, onButtonClick}) => {
  return (
    <Product>
      <ItemImage src={imgsrc} alt={name} />
      <ItemDescription>
        <ItemName> {name} </ItemName>
        <ItemPrice> {price} $ </ItemPrice>
        <ItemAddButton onClick={onButtonClick} > To cart </ItemAddButton>
      </ItemDescription>
    </Product>
  );
}

Item.PropTypes = {
  id : PropTypes.number.isRequired,
  imgsrc : PropTypes.object.isRequired,
  name : PropTypes.string.isRequired,
  price : PropTypes.number.isRequired,
  onCartAddClick : PropTypes.func.isRequired
}
