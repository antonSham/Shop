import styled from "styled-components";

export default styled.div`
  opacity: ${props => (props.shaded ? "0" : "1")};
  position: absolute;
  width: 100%;
  height: 100%;
`;
