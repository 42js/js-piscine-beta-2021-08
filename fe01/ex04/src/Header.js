import React from 'react';
import styled from 'styled-components';
import PrimarySearchAppBar from './AppBarUI.js';

const HeaderBlock = styled.div`
	margin: 0 0 0 0;
	text-align: center;
	background: turquoise;
	.header {
		display: inline-block;
		color: white;
		text-decoration: none;
		margin-right: 0.5rem;
	}
`;

const Header = () => {
	return (
		<HeaderBlock>
			<PrimarySearchAppBar />
		</HeaderBlock>
	)
}

export default Header;
