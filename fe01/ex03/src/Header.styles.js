import styled from "styled-components";

const HeaderStyled = styled.header`
  height: 130px;
  border: 1px dotted grey;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

HeaderStyled.Title = styled.h1`
  font-size: 3.2rem;
`;

export default HeaderStyled;
