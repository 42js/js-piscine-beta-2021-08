import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const MenuStyle = styled.menu`
  align-items: center;
  float: left;
  width: 18%;
  height: auto;
  /* background-color: lightgray; */
  padding: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-right: 1px solid black;
  margin: 0;
`;

const Menu = ({ menu }) => (
  <MenuStyle className={menu}>
    <Button color="blue" name="about">
      About
    </Button>
    <br />
    <Button color="gray" name="content">
      Content
    </Button>
    <br />
  </MenuStyle>
);

export default Menu;
