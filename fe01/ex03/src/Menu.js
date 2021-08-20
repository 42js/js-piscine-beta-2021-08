import React from "react";
import { MenuStyled, MenuList } from "./Menu.styles";
import SearchBar from "./SearchBar";

const Menu = () => {
  return (
    <MenuStyled>
      <MenuList>
        <MenuList.Item>Home</MenuList.Item>
        <MenuList.Item>About Me</MenuList.Item>
        <MenuList.Item>Contact</MenuList.Item>
      </MenuList>
      <SearchBar />
    </MenuStyled>
  );
};

export default Menu;
