import React from 'react';
import styled from 'styled-components';

const BodySection = styled.body`
  float: right;
  width: 75%;
  /* margin: 0 auto; */
  /* margin-bottom: 0; */
  font-size: large;
  background-color: grey;
  /* border: 2px solid black; */
`;

const Body = ({ className, content }) => (
  <BodySection className={className}>{content}</BodySection>
);

export default Body;
