import styled from "styled-components";

export const QuantityButton = styled.div`
  display: inline-block;
  padding: 3px;
  background-color: ${props => (props.blocked ? "darkgray" : "gray")};
  border-top-left-radius: ${props => (props.left ? "10px" : "0")};
  border-top-right-radius: ${props => (props.right ? "10px" : "0")};
  border-bottom-left-radius: ${props => (props.left ? "10px" : "0")};
  border-bottom-right-radius: ${props => (props.right ? "10px" : "0")};

  :hover {
    background-color: darkgray;
  }
  :active {
    background-color: ${props => (props.blocked ? "darkgray" : "dimgray")};
  }
`;
