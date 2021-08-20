import React from 'react';
import styled from 'styled-components';
import MenuListComposition from './MenuUI.js';

const MenuBlock = styled.div`
	margin: 0 1rem 0 0;
	a {
		text-decoration: none;
		color: blue;
	}
`;

const Menu = () => {
	return (
		<MenuBlock>
			<MenuListComposition />
		</MenuBlock>
	)
}

export default Menu;
