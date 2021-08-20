import { Component } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

class App extends Component {
    render() {
        return (
            <GlobalStyle>
                <Root>
                    <header>hi</header>
                </Root>
            </GlobalStyle>
        );
    }
}

const Root = styled.div`
    display: flex;
    flex-direction: row;
`;

export default App;
