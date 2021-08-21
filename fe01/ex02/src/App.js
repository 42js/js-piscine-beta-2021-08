import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import reset from "styled-reset";
import Body from "./component/Body";
import Header from "./component/Header";
import Menu from "./component/Menu";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
	width: 100%;
	height: 100%;
    background-color: #ffffff;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const Layout = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 80px;
  @media only screen and (max-width: 768px) {
    width: 100% !important;
    height: 100%;
    padding-top: 30px;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Header />
        <Menu />
        <Body />
      </Layout>
    </Router>
  );
}

export default App;
