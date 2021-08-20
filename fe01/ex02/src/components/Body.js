import React from 'react';
import styled from 'styled-components';

const BodyContent = styled.section`
  display: flex;
  flex-basis: 100%;
  width: auto;
  overflow: auto;
  background: #ddffff;
  color: black;
`;

const Body = () => {
  return <BodyContent>안녕하세요.</BodyContent>;
};

export default Body;
