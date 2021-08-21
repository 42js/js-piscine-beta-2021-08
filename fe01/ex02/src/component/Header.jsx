import React from "react";
import styled from "styled-components";
import logo from "../img/Chloek.png";

const Head = styled.div`
  background: white;
  position: fixed;
  width: 100%;
  height: 80px;
  color: white;
  left: 0;
  top: 0;
`;

const Logo = styled.div`
  height: 100%;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: left 10px;
  background-size: auto 100%;
  margin-left: 10px;
`;

const Header = () => {
  return (
    <header>
      <Head>
        <Logo />
      </Head>
    </header>
  );
};

export default Header;
