import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";

const Main = styled.div`
  float: left;
  padding-left: 15%;
  width: 100%;
  height: 100%;
  background: white;
  @media only screen and (max-width: 768px) {
    width: 100% !important;
    height: 100%;
    padding-top: 30px;
    padding-left: 0;
  }
`;

const Body = () => {
  return (
    <Main>
      <Switch>
        <Route path="/" exact={true} render={() => <Home />} />
        <Route path="/about" exact={true} render={() => <About />} />
        <Route path="/contact" exact={true} render={() => <Contact />} />
      </Switch>
    </Main>
  );
};

export default Body;
