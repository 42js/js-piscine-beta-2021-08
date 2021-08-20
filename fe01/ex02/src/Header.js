import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    text-align: center;
    font-size: 40px;
    margin: 1rem 1rem 1rem 1rem;
`;

const Header = () => {
    return(
        <HeaderWrapper>
            <Link to="/">I`m Hyeojung</Link>
        </HeaderWrapper>
    );
}

export default Header;