import styled from "styled-components";

export default styled.div`
  opacity: ${props => (props.shaded ? ".25" : "1")};
`;
