import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderBlock = styled.div`
	margin: 0 0 1rem 0;
	text-align: center;
	background: turquoise;
	.header {
		display: inline-block;
		color: white;
		font-size: 3rem;
		text-decoration: none;
		margin-right: 0.5rem;
		&:hover {
			color: whitesmoke;
		}
	}
`;

const Header = () => {

	return (
		<HeaderBlock>
			<Link to="/" className="header">Kunlee's Homepage</Link>
		</HeaderBlock>
	)
}

export default Header;
