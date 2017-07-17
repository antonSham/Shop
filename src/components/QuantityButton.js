import styled from "styled-components";

export default styled.button`
  border-top-left-radius: ${props => (props.left ? "10px" : "0")};
  border-top-right-radius: ${props => (props.right ? "10px" : "0")};
  border-bottom-left-radius: ${props => (props.left ? "10px" : "0")};
  border-bottom-right-radius: ${props => (props.right ? "10px" : "0")};
`;
