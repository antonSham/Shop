import styled from "styled-components";

export default styled.div`
  background-color: rgba(255, 0, 0, 0.5);
  margin: 0;
  position: fixed;
  left: 0;
  top: ${props => props.id}em;
  width: 100%;
  height: 1em;
  border-bottom: 1px solid silver;
`;
