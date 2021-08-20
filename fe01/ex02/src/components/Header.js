import React from 'react';
import styled from 'styled-components';

const HeaderSection = styled.header`
  margin: 0 auto;
  margin-bottom: 1rem;
  text-align: center;
  font-size: x-large;
  background-color: black;
  color: white;
`;

const Header = ({ className, titleName }) => (
  <HeaderSection className={className}>{titleName}</HeaderSection>
);

export default Header;
