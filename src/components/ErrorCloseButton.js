import styled from "styled-components";

export default styled.button`
  position: absolute;
  top: 20px;
  right: 15px;
  color: inherit;
  opacity: 0.4;

  :first-child + * {
    margin-top: 0;
  }

  :hover,
  :focus {
    color: inherit;
    opacity: 0.8;
  }
`;
