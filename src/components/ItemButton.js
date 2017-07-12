import styled from "styled-components";

export default styled.div`
  font-size: 12pt;
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 5px;
  border-radius: 10px;
  background-color: gray;
  -webkit-user-select: none;

  :hover {
    background-color: darkgray;
  }
  :active {
    background-color: dimgray;
  }
`;
