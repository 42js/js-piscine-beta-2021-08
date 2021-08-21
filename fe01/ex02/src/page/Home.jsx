import React from "react";
import styled from "styled-components";
import profile from "../img/wink_profile.png";

export const Wrapper = styled.div`
  padding: 10% 20%;
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 10% 20%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;

const Profile = styled.div`
  background-image: url(${profile});
  background-repeat: no-repeat;
  background-position: left 10px;
  background-size: auto 50%;
`;

const Home = () => {
  return (
    <Wrapper>
      <div className="menu">Home</div>
      <Container>
        <Profile />
      </Container>
    </Wrapper>
  );
};

export default Home;
