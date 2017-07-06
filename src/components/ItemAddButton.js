import styled from 'styled-components';

export const ItemAddButton = styled.div`
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
