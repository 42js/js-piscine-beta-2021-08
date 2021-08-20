import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuWapper = styled.div`
    background: beige;
    margin-right: 4rem;
    text-align: center;
    padding: 1rem 1rem 1rem 1rem;
    .menu {
        font-weight: bold;
    }
`;

const Menu = () => {

    return(
        <MenuWapper>
            <div>
                <div className="menu">Menu</div>
                <Link to="/2">살려주세요</Link>
                <br/>
                <Link to="/3">여기 사람 있어요</Link>
            </div>
        </MenuWapper>
    )

}

export default Menu;