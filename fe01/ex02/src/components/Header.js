import React from 'react';
import styled from 'styled-components';

const HeaderFrame = styled.header`
  display: flex;
  justify-content: center;
  min-height: 20px;
  background: #89a3bb;
  color: black;
`;

const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 2px;
`;

const Header = () => {
  return (
    <HeaderFrame>
      <HeaderTitle>This is HomePage</HeaderTitle>
    </HeaderFrame>
  );
};

export default Header;
