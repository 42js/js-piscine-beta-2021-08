
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

const HeaderStyle = styled.h1`
    color: palevioletred;
    background: rgb(233,191,177);
    font-size: 3rem;
    text-align: center;
    padding: 2rem;  
    margin : 0;  
`;

const LinkStyle = styled(Link)`
    text-decoration: none; 
    color : white; 
`

function Header() {

    return (
        <HeaderStyle> 
            <LinkStyle to="/">Jikwon Page 🤓</LinkStyle>
        </HeaderStyle>
    );

}

export default Header;
