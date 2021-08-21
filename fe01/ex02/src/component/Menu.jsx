import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuBar = styled.div`
  height: 100% !important;
  width: 15%;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  background: white;
  position: fixed;
  float: left;
  padding-top: 50px;
  @media only screen and (max-width: 768px) {
    width: 100% !important;
    height: 40px !important;
    display: flex;
    flex-direction: row;
    position: fixed;
  }
`;

const MenuLink = styled.div`
  width: 50%;
  height: 50px;
  padding: 10px 50px;
  font-family: "Kaisei Opti", serif;
  color: #9aa5ff;
`;

const MenuItem = ({ name }) => {
  return <MenuLink>{name}</MenuLink>;
};

const Menu = ({ width, height, children }) => {
  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <MenuBar>
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <MenuItem name={menu.name} />
          </Link>
        );
      })}
    </MenuBar>
  );
};

export default Menu;
