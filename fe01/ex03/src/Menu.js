import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuBlock = styled.div`
	margin: 0 1rem 0 0;
	a {
		display: flex;
		align-items: center;
		width: 100%;
		font-size: 1rem;
		text-decoration: none;
	}
`;

const Menu = () => {
	return (
		<MenuBlock>
			<Nav defaultActiveKey="/" className="flex-column">
				<Nav.Link as="div"><Link to="/2">FirstMenu</Link></Nav.Link>
				<Nav.Link as="div"><Link to="/3">SecondMenu</Link></Nav.Link>
				<Nav.Link eventKey="disabled" disabled>
					미개봉
				</Nav.Link>
			</Nav>
		</MenuBlock>
	)
}

export default Menu;
