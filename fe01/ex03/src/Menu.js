import React from 'react';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

const MenuWapper = styled.div`
    text-align: center;
    .menu {
        font-weight: bold;
    }
`;

const Menu = () => {

    return(
        <MenuWapper>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/2">살려주세요</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/3">여기 사람 있어요</Nav.Link>
                </Nav.Item>
            </Nav>
        </MenuWapper>
    )

}

export default Menu;