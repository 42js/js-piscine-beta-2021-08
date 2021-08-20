import React from 'react';
import styled from 'styled-components';

const MenuFrame = styled.section`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 20px;
  overflow: auto;
  background-color: #bad4ed;
`;

// display: flex;
// align-items: flex-end;
// flex-direction: column;
// list-style-type: non;
// margin: 0;
// padding: 20px;
// width: auto;
// height: 100%;
// background: #bad4ed;
// position: fixed;
// list-style-type: none;

const MenuItem = styled.a`
  font-size: 2rem;
  list-style-type: none;
`;

const Menu = () => {
  return (
    <MenuFrame>
      <MenuItem href="https://42seoul.kr/seoul42/main/view">42seoul</MenuItem>
      <MenuItem href="https://www.google.com/">Google</MenuItem>
    </MenuFrame>
  );
};

export default Menu;
