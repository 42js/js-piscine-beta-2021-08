import styled from "styled-components";

export const MenuStyled = styled.nav`
  display: inline-block;
  font-size: 2rem;
  border: 1px dotted grey;
  box-sizing: border-box;
  padding: 10px;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 50px;
  }
`;

MenuList.Item = styled.li`
  min-width: 100px;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    margin-bottom: 30px;
  }

  :hover {
    color: #ffec47;
  }
`;
