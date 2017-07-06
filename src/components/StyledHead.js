import styled from 'styled-components';

export const StyledHead = styled.div`
  display: table;
  width: 100%;

  img {
    width : 100px;
    float : left;
    margin : 10px;
    margin-right: 50px;
  }

  h1 + a > img {
    float : right;
  }
`;
