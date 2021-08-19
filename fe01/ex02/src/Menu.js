import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuBlock = styled.div`
	margin: 0 1rem 0 0;
	background: turquoise;
	a {
		border: 1px solid blueviolet;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		text-align: center;
		height: 100px;
		color: blueviolet;
		font-size: 1.5rem;
		text-decoration: none;
		&:hover {
			color: whitesmoke;
		}
	}
`;

const Menu = () => {
	return (
		<MenuBlock>
			<div>
				<Link to="/2">FirstMenu</Link>
				<Link to="/3">SecondMenu</Link>
			</div>
		</MenuBlock>
	)
}

export default Menu;
