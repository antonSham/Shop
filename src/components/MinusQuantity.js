import styled from 'styled-components';

export const MinusQuantity = styled.div`
  display: inline-block;
  padding: 3px;
  background-color: ${props => props.blocked ? "darkgray" : "gray" };
  border-radius: 10px 0 0 10px;

  :hover {
    background-color: darkgray;
  }
  :active {
    background-color: ${props => props.blocked ? "darkgray" : "dimgray" };
  }
`;
